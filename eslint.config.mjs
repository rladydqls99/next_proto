import { readdirSync, statSync } from "fs";
import { dirname } from "path";
import { join } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:prettier/recommended",
    "prettier"
  ),

  {
    rules: {
      ...importRestrictionRules(),
      ...publicApiRestrictionRules(),
      ...importOrderRules(),
    },
  },
];

export default eslintConfig;

// ----------------------------------------------------------------------------------------------------

// 각 계층별 import 제한 규칙
function importRestrictionRules() {
  return {
    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          { target: "./src/pages", from: "./src/app" },
          { target: "./src/widgets", from: "./src/app" },
          { target: "./src/widgets", from: "./src/pages" },
          { target: "./src/domains", from: "./src/app" },
          { target: "./src/domains", from: "./src/pages" },
          { target: "./src/domains", from: "./src/widgets" },
          { target: "./src/shared", from: "./src/app" },
          { target: "./src/shared", from: "./src/pages" },
          { target: "./src/shared", from: "./src/widgets" },
          { target: "./src/shared", from: "./src/domains" },
          // 도메인 간 import 제한 규칙 (자동 생성)
          ...createDomainRestrictionRules(),
        ],
      },
    ],
  };
}

// public api 제한 규칙
function publicApiRestrictionRules() {
  return {
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["@/shared/**", "@/domains/*/**", "@/widgets/*/**", "@/pages/*/**"],
            message: "index.ts를 통해 import하세요.",
          },
        ],
      },
    ],
  };
}

// import 순서 강제 규칙 (아키텍처 가이드 준수)
function importOrderRules() {
  return {
    "import/order": [
      "error",
      {
        groups: [
          "builtin", // Node.js 내장 모듈 (fs, path 등)
          "external", // 외부 라이브러리 (react, next, lodash 등)
          "internal", // 내부 모듈 (@/로 시작하는 모든 것)
          "parent", // 상위 디렉토리 (../)
          "sibling", // 같은 디렉토리 (./)
          "index", // index 파일
        ],
        pathGroups: [
          // Next.js 관련 import를 외부 라이브러리 다음에 배치
          {
            pattern: "next/**",
            group: "external",
            position: "after",
          },
          // pages 레이어
          {
            pattern: "@/pages/**",
            group: "internal",
            position: "before",
          },
          // widgets 레이어
          {
            pattern: "@/widgets/**",
            group: "internal",
            position: "before",
          },
          // domains 레이어
          {
            pattern: "@/domains/**",
            group: "internal",
            position: "before",
          },
          // shared 레이어 (가장 마지막)
          {
            pattern: "@/shared/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "always", // 그룹 간 빈 줄 강제
        alphabetize: {
          order: "asc", // 각 그룹 내에서 알파벳 순서
          caseInsensitive: true,
        },
      },
    ],
  };
}

// ----------------------------------------------------------------------------------------------------

// 도메인 폴더 자동 탐지
function getDomainFolders() {
  const domainsPath = join(__dirname, "src", "domains");
  try {
    return readdirSync(domainsPath).filter(item => {
      const itemPath = join(domainsPath, item);
      return statSync(itemPath).isDirectory();
    });
  } catch (error) {
    console.warn("domains 폴더를 찾을 수 없습니다:", error.message);
    return [];
  }
}

// 도메인 간 import 제한 규칙 생성
function createDomainRestrictionRules() {
  const domains = getDomainFolders();
  return domains.map(domain => ({
    target: `./src/domains/${domain}/**/*`,
    from: `./src/domains/!(${domain})/**/*`,
    message: `도메인 간의 직접적인 import는 금지됩니다.`,
  }));
}
