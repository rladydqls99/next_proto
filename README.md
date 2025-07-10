# Next.js 관리자 대시보드 프로토타입

## 🚀 기술 스택

- **node**: 18+
- **프레임워크**: Next.js 15.3.4 (App Router)
- **언어**: TypeScript 5
- **스타일링**: Tailwind CSS 4
- **패키지 매니저**: pnpm (8+)
- **코드 품질**: ESLint + Prettier + Husky


## 📁 프로젝트 아키텍처

```
src/
├── app/ # 라우팅 및 전역 설정
│   ├── (pages)/                  # 페이지 그룹
│   │   └── page-name/
│   ├── providers/                # 전역 provider
│   └── styles/                   
│       ├── animation.css         # 애니메이션 CSS 정의
│       ├── globals.css           # 전역 CSS 설정
│       └── font.ts               # 폰트 정의
├── view/                         # 페이지별 UI 컴포넌트 및 lib
│   └── page-name/   
│       ├── ui/                     
│       └── lib/ 
├── widgets/                      # 재사용 가능한 복합 컴포넌트 
├── domains/                      # 도메인별 로직
│   ├── api/                      # CRUD
│   ├── lib/                      # hooks 또는 기타 유틸 함수
│   ├── model/                    # type, validation, store 등
│   └── index.ts     
└── shared/                       # 공통
    ├── api/                      # api instance
    ├── config/                   # endpoint, route 설정
    ├── lib/                      # 공통 hoos 및 유틸 함수
    ├── model/                    # 공통 type
    ├── ui/                       # 공통 UI 컴포넌트트
    └── index.ts
```


## ⚒️ 프로젝트 목적

### 1. TanStack Query Hydration 최적화
Next.js App Router와 TanStack Query의 SSR/하이드레이션을 결합하여 빠른 초기 로딩과 매끄러운 사용자 경험을 제공합니다.

#### 도입 배경
**CSR의 한계**: 클라이언트에서만 데이터를 불러오면 초기 화면이 비어있어 사용자 경험이 저하  
**SEO 요구사항**: 검색 엔진이 페이지 콘텐츠를 제대로 인덱싱할 수 있도록 서버에서 미리 데이터 렌더링 필요  
**성능 최적화**: 서버에서 데이터를 미리 가져와 초기 로딩 속도 개선

#### 구현 방식
```typescript
// 서버 컴포넌트에서 데이터 prefetch
const queryClient = new QueryClient();
await queryClient.prefetchQuery({
  queryKey: [ENDPOINT.GROUP.LIST, ""],
  queryFn: () => apiGetGroupList(""),
});

// HydrationBoundary로 클라이언트에 전달
<HydrationBoundary state={dehydrate(queryClient)}>
  <GroupPage />
</HydrationBoundary>
```

#### Hydration의 장점
**즉시 화면 표시**: 서버에서 미리 렌더링된 데이터로 로딩 없이 즉시 콘텐츠 표시  
**SEO 최적화**: 검색 엔진이 완전한 HTML 콘텐츠에 접근 가능  
**Cache 활용**: 서버에서 가져온 데이터가 클라이언트 캐시에 자동 저장되어 재사용  
**사용자 경험**: 페이지 전환 시 데이터 로딩 지연 최소화  

#### 고려사항
**메모리 사용량**: 페이지마다 새로운 QueryClient 생성으로 서버 메모리 사용량 증가  
**캐시 전략**: 서버와 클라이언트 간 캐시 동기화 복잡성  
**에러 처리**: 서버에서 API 실패 시 클라이언트 fallback 처리 필요

### 2. 하이브리드 아키텍처 적용
기존 FSD(Feature-Sliced Design) 아키텍처의 한계를 보완한 **페이지 중심 UI + 도메인 중심 데이터** 구조를 적용

#### 기존 FSD 아키텍처의 문제점
- `features`와 `entities` 레이어 구분이 모호하여 개발자마다 다른 해석 가능
- 파일 위치 결정에 소요되는 시간으로 인한 개발 속도 저하
- 협업 시 일관성 부족으로 인한 혼란

#### 해결책
**UI 로직**: 페이지 기반 구조 (`views/`)
- 대부분의 UI 로직이 특정 페이지에 종속되므로 페이지 단위로 관리
- 파일 위치에 대한 고민 시간 최소화
- (특정 도메인에 종속된 재사용 UI일 경우 `domains/ui/`로 위치 변경)

**데이터 로직**: 도메인 기반 구조 (`domains/`)
- 데이터 패칭 로직은 도메인 경계가 명확하여 위치 결정이 용이
- 여러 페이지에서 공유되는 비즈니스 로직의 재사용성 확보

#### 아키텍처 장점
**명확한 파일 위치**: UI는 페이지별, 데이터는 도메인별로 구분하여 위치 고민 최소화  
**재사용성**: 도메인 로직의 여러 페이지 간 공유 용이  
**의존성 관리**: `app → views → widgets → domains → shared` 단방향 의존성 구조 (ESLint 규칙 적용)  
**협업 효율성**: 일관된 구조로 팀원 간 코드 위치 예측 가능  

#### 고려사항
**적용 범위**: 도메인 간 공유 로직이 적은 소규모 프로젝트에서는 과도한 구조화 가능성


## 🛠️ 개발 환경 설정

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
