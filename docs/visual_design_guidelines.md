# Visual Design Guidelines (E.TESOL v2)

---

## 1. Design Token & Theme Strategy

본 프로젝트는 **CSS Variables**와 **Tailwind CSS v4**를 결합하여 디자인 토큰을 관리합니다. 모든 주요 색상과 수치는 `:root`와 `.dark` 클래스에 정의되어 있으며, 하드코딩된 색상값 대신 반드시 의미적(Semantic) 변수명(예: `bg-primary`, `text-muted-foreground`)을 사용해야 합니다.

*   **Dark Mode 호환성:** 시스템은 기본적으로 다크/라이트 모드를 완벽하게 지원하도록 설계되었습니다. 명도와 채도를 정밀하게 제어하기 위해 대부분의 색상이 `oklch` 형식으로 지정되어 있습니다. (일부 고유 브랜드 컬러 제외)

## 2. Color Palette (색상 규정)

브랜드의 정체성을 나타내는 색상과 UI 요소에 사용되는 기본 색상들입니다.

### 2.1 브랜드 컬러 (Brand Colors)
*   **Primary (버건디)**: `#8B1A2B`
    *   **용도**: 주요 CTA 버튼, 강조 텍스트, 활성화(Active) 상태 표시.
    *   **특징**: 사이트 전체에서 가장 눈에 띄는 포인트 컬러입니다.
*   **Destructive (경고/위험)**: `#d4183d`
    *   **용도**: 삭제 버튼, 에러 메시지 텍스트.

### 2.2 배경 및 텍스트 (Background & Foreground)
*   **Background (Light/Dark)**: `#ffffff` / `oklch(0.145 0 0)` (매우 어두운 무채색)
*   **Foreground (텍스트 기본)**: `oklch(0.145 0 0)` (거의 검은색) / `oklch(0.985 0 0)` (거의 흰색)
    *   **접근성**: 순수한 `#000000`이나 `#ffffff` 대비 눈의 피로를 줄여주는 소프트한 톤을 사용합니다.
*   **Muted & Accent**: `#ececf0` / `#e9ebef` 등
    *   **용도**: 비활성 텍스트, 보조 텍스트, 뱃지(Badge) 배경, 테이블 헤더 배경 등. 부가적인 정보를 표현할 때 사용합니다.

### 2.3 테두리 조절 (Borders)
*   **Border**: `rgba(0, 0, 0, 0.08)` (Light 에서는 매우 옅은 반투명 검정 사용)
*   **특징**: 테두리는 시각적으로 강하게 분리하기보다, 은은하게 영역을 구분하는 용도로 얇고 투명도 있게 적용합니다.

---

## 3. Typography (타이포그래피)

가독성과 세련됨을 위해 서체 규격을 엄격하게 제어합니다.

*   **Primary Font-Family**: **`Pretendard`**
    *   한국어와 영문 모두 깔끔하고 현대적인 느낌을 주는 서체입니다. `font-sans` 유틸리티에 기본 내장되어 동작합니다.
*   **Base Font Size**: `:root`에서 `--font-size: 80%;` 로 설정됨.
    *   **특징**: 브라우저 기본 폰트 크기보다 살짝 작게 스케일링되어, 전체적으로 더 정교하고 밀도 있는 텍스트 배치를 보여줍니다. (1rem 수준이 기본 16px이 아닌 더 작은 크기로 렌더링됨)
*   **Font Weights**:
    *   `Normal (400)`: 텍스트 본문(Paragraph), 인풋(Input), 일반 리스트에 사용.
    *   `Medium (500)`: 제목(H1~H4), 버튼 텍스트, 라벨(Label)에 사용하여 모던한 무게감을 유지합니다. 볼드(700) 대신 미디엄을 널리 사용하여 투박함을 줄였습니다.
*   **Line Height**: 기본적으로 `1.5`를 일괄 적용하여 넉넉한 글줄 간격을 통한 가독성을 확보합니다. (`leading-none`, `leading-tight` 등 컴포넌트 특성에 따라 조절)

---

## 4. UI Elements & Components (형태 및 요소)

### 4.1 형상 및 곡률 (Shapes & Border Radius)
*   프로젝트 전반적으로 **부드럽고 둥근 모서리(Rounded corners)**를 갖습니다.
*   **기본 `--radius`**: `0.625rem`
*   **작은 요소 (버튼, 뱃지, 인풋)**: `rounded-md`
*   **큰 요소 (카드 컴포넌트 등 면적이 넓은 요소)**: `rounded-xl`

### 4.2 버튼 (Buttons)
*   **Default**: 꽉 채운 Primary 컬러 배경 + 흰색 텍스트 (`bg-primary text-primary-foreground`)
*   **Outline**: 투명 배경 + 테두리 있음 (`border bg-background`)
*   **Shadow/Focus**: 클릭 시 물리적인 그림자보다는 `focus-visible` 일 때 외곽선에 `ring-[3px] ring-ring/50`을 주어 브라우저 기본 아웃라인을 대체하는 고급스러운 포커스 링을 표시합니다.
*   **Hover**: 배경색의 투명도를 조절(`hover:bg-primary/90`)하여 부드러운 상호작용(`transition-all`)을 줍니다.
*   **폰트**: 작고 또렷한 형태 (`text-sm font-medium`).

### 4.3 폼 요소 (Inputs / Forms)
*   **시각적 특징**: 인풋 필드의 외곽선을 강하게 그리기보다, 옅은 배경색(`--input-background: #f3f3f5`)을 채워 넣어 살짝 파인 듯한 부드러운 형태를 띱니다.

### 4.4 카드 컴포넌트 (Cards)
*   **기본 배경**: `bg-card` (테마에 맞는 배경색)
*   **테두리**: 아주 얇은 `border`
*   **모서리**: `rounded-xl` (버튼보다 더 둥글게 처리하여 구조적 대비감 부여)
*   **여백(Spacing)**: 카드 내부의 패딩은 여유 있게 잡으며(예: `px-6 py-6`), 헤더/콘텐츠/푸터 간의 간격을 넓은 `gap-6`으로 주어 시원시원한 느낌을 강조합니다.

---

## 5. Animation & Interactions (애니메이션)

*   **상태 전환 (Transitions)**: 호버/액티브 상태 이동 시 딱딱하게 바뀌지 않도록 항상 `transition-all` 이나 `transition-colors`를 적용합니다.
*   추가적인 미세 애니메이션(Micro-interactions)은 `tw-animate-css` 플러그인 등 시스템 애니메이션에 의존하여 통일된 모션감을 제공해야 합니다.
