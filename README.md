# Next.js 관리자 대시보드 프로토타입

Feature-Sliced Design과 도메인 중심 아키텍처를 결합한 현대적인 Next.js 관리자 대시보드 프로젝트입니다.

## 🚀 기술 스택

- **프레임워크**: Next.js 15.3.4 (App Router)
- **언어**: TypeScript 5
- **스타일링**: Tailwind CSS 4
- **폰트**: Geist Sans & Geist Mono
- **패키지 매니저**: pnpm
- **코드 품질**: ESLint + Prettier + Husky

## 📁 프로젝트 아키텍처

```
src/
├── app/ # 라우팅 및 전역 설정
│   ├── (pages)/                  # 페이지 그룹
│   │   └── page-name/
│   │       ├── layout.tsx        # 루트 레이아웃
│   │       └── page.tsx          # 페이지
│   └── styles/                   # 전역 스타일
│           └── globals.css
├── pages/                        # 페이지별 UI 컴포넌트 및 hooks
├── widgets/                      # 재사용 가능한 복합 컴포넌트
├── domains/                      # 도메인별 로직
└── shared/                       # 공통 유틸리티 및 컴포넌트
```

## 🛠️ 개발 환경 설정

### 필수 요구사항
- Node.js 18+
- pnpm 8+

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행 (Turbopack 사용)
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start
```

### 코드 품질 관리

```bash
# ESLint 검사
pnpm lint

# Prettier 포맷팅
pnpm format

# 포맷팅 검사
pnpm format:check
```

## 🚦 시작하기

1. 프로젝트 클론
2. `pnpm install`로 의존성 설치
3. `pnpm dev`로 개발 서버 실행
4. `http://localhost:3000`에서 확인