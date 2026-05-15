import { useState } from 'react';
import './CourseEnrollmentForm.css';

function toastError(message: string): boolean {
  alert(message);
  return false;
}

interface CourseEnrollmentFormProps {
  defaultApplicationType?: string;
}

export default function CourseEnrollmentForm({
  defaultApplicationType,
}: CourseEnrollmentFormProps) {
  const offlineTypes = ['수업신청', '레벨테스트', '설명회'];
  const applicationTypeOptions = [
    { label: '상담신청', en: 'Counseling' },
    { label: '레벨테스트', en: 'Level Test' },
    { label: '수업신청', en: 'Class Apply' },
    { label: '설명회', en: 'Seminar' },
    { label: '테스트 TIP', en: 'Test TIP' },
  ];

  const nationalityOptions = [
    { label: '내국인', en: 'Domestic' },
    { label: '외국인', en: 'Foreigner' },
    { label: '재외국인', en: 'Overseas' },
  ];
  const discoveryOptions = [
    { label: '네이버 검색', en: 'Naver Search' },
    { label: '인스타그램', en: 'Instagram' },
    { label: '유튜브', en: 'YouTube' },
    { label: '지인 추천', en: 'Referral' },
    { label: '오프라인 안내', en: 'Offline Guide' },
    { label: '기타', en: 'Other' },
  ];
  const regionOptions = [
    { label: '서울 강남', en: 'Seoul Gangnam' },
    { label: '부산 서면', en: 'Busan Seomyeon' },
    { label: '대구', en: 'Daegu' },
    { label: '광주', en: 'Gwangju' },
    { label: '경기도', en: 'Gyeonggi-do' },
    { label: '충남', en: 'Chungnam' },
    { label: '강원도', en: 'Gangwon-do' },
    { label: '제주도', en: 'Jeju-do' },
  ];
  const jobOptions = [
    { label: '학생', en: 'Student' },
    { label: '대학생', en: 'Univ. Student' },
    { label: '직장인', en: 'Employee' },
    { label: '교사', en: 'Teacher' },
    { label: '기타', en: 'Other' },
  ];

  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nationality, setNationality] = useState<string[]>([]);
  const [discoveryChannels, setDiscoveryChannels] = useState<string[]>([]);
  const [job, setJob] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [applicationType, setApplicationType] = useState(defaultApplicationType || '수업신청');
  const isOfflineType = offlineTypes.includes(applicationType);

  const [region, setRegion] = useState<string[]>([]);
  const [scheduleDate1, setScheduleDate1] = useState('');
  const [scheduleDate2, setScheduleDate2] = useState('');
  const [scheduleTime1, setScheduleTime1] = useState('');
  const [scheduleTime2, setScheduleTime2] = useState('');
  const [inquiryContent, setInquiryContent] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const timeOptions = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00',
  ];

  const handlePhoneChange = (value: string) => {
    const n = value.replace(/[^0-9]/g, '');
    if (n.length <= 3) setPhone(n);
    else if (n.length <= 7) setPhone(`${n.slice(0, 3)}-${n.slice(3)}`);
    else setPhone(`${n.slice(0, 3)}-${n.slice(3, 7)}-${n.slice(7, 11)}`);
  };

  const toggle = (
    val: string,
    list: string[],
    set: (v: string[]) => void,
  ) => {
    set(list.includes(val) ? list.filter((v) => v !== val) : [...list, val]);
  };

  const validateStep1 = (): boolean => {
    if (!applicationType) return toastError('신청 유형을 선택해주세요.');
    if (!name.trim()) return toastError('이름을 입력해주세요.');
    if (!phone.trim()) return toastError('연락처를 입력해주세요.');
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return toastError('올바른 이메일을 입력해주세요.');
    if (!birthDate.trim()) return toastError('생년월일을 입력해주세요.');
    if (nationality.length === 0) return toastError('외국인·내국인·재외국인을 선택해주세요.');
    return true;
  };

  const validateStep2 = (): boolean => {
    if (!job) return toastError('직업을 선택해주세요.');
    if (discoveryChannels.length === 0) return toastError('신청 경로를 1개 이상 선택해주세요.');
    if (!introduction.trim()) return toastError('자기소개를 입력해주세요.');
    if (!privacyConsent) return toastError('개인정보제공 약관동의가 필요합니다.');

    if (isOfflineType) {
      if (region.length === 0) return toastError('오프라인 신청의 지역을 선택해주세요.');
      if (!scheduleDate1 && !scheduleDate2) return toastError('오프라인 신청의 일자를 1개 이상 선택해주세요.');
      if (!scheduleTime1 && !scheduleTime2) return toastError('오프라인 신청의 시간을 1개 이상 선택해주세요.');
    } else if (applicationType === '상담신청' && !inquiryContent.trim()) {
      return toastError('문의할 내용을 입력해주세요.');
    }
    return true;
  };

  const goToStep2 = () => {
    if (!validateStep1()) return;
    setCurrentStep(2);
  };

  const handleSubmit = () => {
    if (!validateStep2()) return;
    alert('수강신청이 접수되었습니다. 확인 후 빠른 시일 내에 연락드리겠습니다.');
    resetForm();
  };

  const handleCancel = () => {
    if (window.confirm('작성 중인 내용이 초기화됩니다. 취소하시겠습니까?')) resetForm();
  };

  const resetForm = () => {
    setCurrentStep(1);
    setName('');
    setEmail('');
    setPhone('');
    setBirthDate('');
    setNationality([]);
    setJob('');
    setDiscoveryChannels([]);
    setIntroduction('');
    setPrivacyConsent(false);
    setApplicationType(defaultApplicationType || '수업신청');
    setRegion([]);
    setScheduleDate1('');
    setScheduleDate2('');
    setScheduleTime1('');
    setScheduleTime2('');
    setInquiryContent('');
  };

  return (
    <div className="expert-application-form">
      <div className="application-panel">
        <div className="application-header">
          <div className="application-title">
            <strong>신청서</strong>
            <span>Application Form</span>
          </div>

          <div className="application-progress" aria-hidden="true">
            <span className={`progress-step ${currentStep >= 1 ? 'is-active' : ''}`}>1</span>
            <span className={`progress-line ${currentStep >= 2 ? 'is-active' : ''}`} />
            <span className={`progress-step ${currentStep >= 2 ? 'is-active' : ''}`}>2</span>
            <span className="progress-line" />
            <span className="progress-step">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </span>
          </div>

          <div className="application-header-spacer" />
        </div>

        {currentStep === 1 && (
          <div className="application-step">
            <section className="form-section">
              <div className="application-select-field">
                <label className="field-label" htmlFor="application-type-select">
                  신청 <span>Application</span> <em>*</em>
                </label>
                <select
                  id="application-type-select"
                  value={applicationType}
                  onChange={(e) => {
                    setApplicationType(e.target.value);
                    setCurrentStep(1);
                  }}
                  className="application-type-select"
                >
                  {applicationTypeOptions.map((option) => (
                    <option key={option.label} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </section>

            <section className="form-section basic-section">
              <h3 className="section-heading">
                기본 인적사항 <span>Basic Information</span>
              </h3>

              <div className="field-grid">
                <div className="form-field">
                  <label className="field-label" htmlFor="enroll-name">성명 <span>Name</span> <em>*</em></label>
                  <input id="enroll-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="성명 입력" className="form-control" />
                </div>
                <div className="form-field">
                  <label className="field-label" htmlFor="enroll-phone">연락처 <span>Phone</span> <em>*</em></label>
                  <input id="enroll-phone" value={phone} onChange={(e) => handlePhoneChange(e.target.value)} placeholder="010-1234-5678" maxLength={13} className="form-control" />
                </div>
                <div className="form-field">
                  <label className="field-label" htmlFor="enroll-email">이메일 <span>E-mail</span> <em>*</em></label>
                  <input id="enroll-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com" className="form-control" />
                </div>
                <div className="form-field">
                  <label className="field-label" htmlFor="enroll-birth">생년월일 <span>Birth Date</span> <em>*</em></label>
                  <input id="enroll-birth" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="form-control date-control" />
                </div>
              </div>

              <div className="form-field nationality-field">
                <div className="field-label">내국인·외국인·재외국인 <span>Nationality</span> <em>*</em></div>
                <div className="checkbox-row">
                  {nationalityOptions.map((option) => (
                    <label key={option.label} className="checkbox-choice">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={nationality.includes(option.label)}
                        onChange={() => toggle(option.label, nationality, setNationality)}
                      />
                      <span>{option.label}</span>
                      <span className="choice-en">{option.en}</span>
                    </label>
                  ))}
                </div>
              </div>
            </section>

            <div className="form-actions">
              <button type="button" onClick={handleCancel} className="secondary-action">
                취소 <span>Cancel</span>
              </button>
              <button type="button" onClick={goToStep2} className="primary-action">
                다음 단계로 <span>Next Step</span>
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="application-step">
            <section className="form-section">
              <div className="field-grid">
                <div className="form-field">
                  <div className="field-label">직업 <span>Job</span> <em>*</em></div>
                  <div className="checkbox-row">
                    {jobOptions.map((option) => (
                      <label key={option.label} className="checkbox-choice">
                        <input
                          type="radio"
                          name="enroll-job"
                          className="form-checkbox round-checkbox"
                          checked={job === option.label}
                          onChange={() => setJob(option.label)}
                        />
                        <span>{option.label}</span>
                        <span className="choice-en">{option.en}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="form-field">
                  <div className="field-label">신청을 알게 된 경로 <span>Discovery Channel</span> <em>*</em></div>
                  <div className="checkbox-row">
                    {discoveryOptions.map((option) => (
                      <label key={option.label} className="checkbox-choice">
                        <input
                          type="checkbox"
                          className="form-checkbox"
                          checked={discoveryChannels.includes(option.label)}
                          onChange={() => toggle(option.label, discoveryChannels, setDiscoveryChannels)}
                        />
                        <span>{option.label}</span>
                        <span className="choice-en">{option.en}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {isOfflineType ? (
              <section className="form-section offline-section">
                <h3 className="section-heading">
                  신청 정보 <span>Offline Information</span>
                </h3>

                <div className="form-field">
                  <div className="field-label">지역 <span>Region</span> <em>*</em> <small>(복수 선택 가능)</small></div>
                  <div className="option-pills region-pills">
                    {regionOptions.map((option) => (
                      <label
                        key={option.label}
                        className={`option-pill compact ${region.includes(option.label) ? 'is-dark-selected' : ''}`}
                      >
                        <input
                          type="checkbox"
                          className="option-checkbox-hidden"
                          checked={region.includes(option.label)}
                          onChange={() => toggle(option.label, region, setRegion)}
                        />
                        <span>{option.label}</span>
                        <span className="option-en">{option.en}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="field-grid">
                  <div className="form-field">
                    <div className="field-label">일자 <span>Date</span> <em>*</em></div>
                    <div className="stacked-controls">
                      <input type="date" value={scheduleDate1} onChange={(e) => setScheduleDate1(e.target.value)} className="form-control" />
                      <input type="date" value={scheduleDate2} onChange={(e) => setScheduleDate2(e.target.value)} className="form-control" />
                    </div>
                  </div>

                  <div className="form-field">
                    <div className="field-label">시간 <span>Time</span> <em>*</em></div>
                    <div className="stacked-controls">
                      <select value={scheduleTime1} onChange={(e) => setScheduleTime1(e.target.value)} className="form-control">
                        <option value="">선택</option>
                        {timeOptions.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                      <select value={scheduleTime2} onChange={(e) => setScheduleTime2(e.target.value)} className="form-control">
                        <option value="">선택</option>
                        {timeOptions.map((time) => (
                          <option key={`t2-${time}`} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              <section className="form-section">
                <label className="field-label" htmlFor="enroll-inquiry">문의 내용 <span>Inquiry Content</span> <em>*</em></label>
                <textarea id="enroll-inquiry" value={inquiryContent} onChange={(e) => setInquiryContent(e.target.value)} placeholder="문의하실 내용을 상세히 적어주세요." className="form-textarea large" />
              </section>
            )}

            <section className="form-section">
              <label className="field-label" htmlFor="enroll-intro">자기소개 <span>Introduction</span> <em>*</em></label>
              <textarea id="enroll-intro" value={introduction} onChange={(e) => setIntroduction(e.target.value)} placeholder="교육 참여 목적과 학습 목표를 간단히 적어주세요." className="form-textarea" />
            </section>

            <label className="privacy-choice checkbox-choice">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={privacyConsent}
                onChange={(e) => setPrivacyConsent(e.target.checked)}
              />
              <span>개인정보제공 약관동의 *</span>
              <span className="choice-en">Privacy Policy Consent</span>
            </label>

            <div className="form-actions step-two-actions">
              <button type="button" onClick={() => setCurrentStep(1)} className="secondary-action">
                이전 단계로 <span>Prev Step</span>
              </button>
              <button type="button" onClick={handleSubmit} className="primary-action">
                제출하기 <span>Submit</span>
              </button>
            </div>

            <div className="refund-note">
              <p>Registration fee for the program is non-refundable. Start of the program refers to the class starting date at Times Media. Full refund of tution will not be issoed on or after the class starting date. Partial refund of tution may be issued in the First half of the class.</p>
              <p>I understand for the Times Media refund policy and i agree to follow the policy</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
