# Changelog Autogen 🎉

![npm version](https://img.shields.io/npm/v/@knu-k/changelog-autogen)

`changelog-autogen`은 Angular 커밋 규칙을 기반으로 자동으로 `CHANGELOG.md` 파일을 생성하는 도구입니다. 이 도구는 커밋 메시지를 분석하여 자동으로 변경 사항을 기록하고, 프로젝트의 릴리즈 노트를 손쉽게 관리할 수 있게 도와줍니다.

## 📑 목차

-   [✨ 특징](#-특징)
-   [📥 설치](#-설치)
-   [📝 사용법](#-사용법)
    -   [🗂️ 커밋 메시지 형식](#-커밋-메시지-형식)
    -   [📂 예시](#-예시)
-   [🤝 기여 방법](#-기여-방법)
-   [📝 라이선스](#-라이선스)
-   [👨‍💻 저자](#-저자)

## ✨ 특징

-   Angular 커밋 규칙을 기반으로 한 자동화된 changelog 생성.
-   커밋 메시지에 맞춰 프로젝트의 `CHANGELOG.md` 파일을 자동으로 업데이트.
-   `1.0.0` 버전부터 지원.
-   `changelog-gen` 명령어로 간단하게 실행 가능.

## 📥 설치

이 프로젝트는 npm 패키지로 배포됩니다. 다음 명령어를 통해 설치할 수 있습니다:

```bash
npm install -g @knu-k/changelog-autogen
```

## 📝 사용법

### changelog-gen 명령어

설치 후, `changelog-gen` 명령어를 통해 `CHANGELOG.md` 파일을 자동으로 생성할 수 있습니다.

```bash
changelog-gen init
```

이 명령어를 실행하면 프로젝트의 루트 디렉터리에 `CHANGELOG.md` 파일이 생성됩니다.

### 🗂️ 사용 가능한 커밋 타입:

`changelog-autogen`은 Angular 커밋 규칙을 따릅니다. 커밋 메시지는 다음 형식을 따라야 합니다:

-   `build`
-   `ci`
-   `docs`
-   `feat`
-   `fix`
-   `perf`
-   `refactor`
-   `style`
-   `test`

이 타입들은 각각 특정 섹션으로 분류되며, 릴리즈 노트를 자동으로 생성하는 데 사용됩니다.

### 📂 예시

다음과 같은 커밋 메시지가 있을 경우:

```
feat(auth): 사용자 로그인 기능 추가
fix(button): 버튼 정렬 문제 해결
docs(readme): 설치 방법 수정
```

생성된 `CHANGELOG.md` 파일은 다음과 같습니다:

```
## [1.0.0] - YYYY-MM-DD

### Feat
- 사용자 로그인 기능 추가 (auth)

### Fix
- 버튼 정렬 문제 해결 (button)

### Docs
- 설치 방법 수정 (readme)
```

## 🤝 기여 방법

이 프로젝트에 기여하고 싶다면, 다음 단계를 따라 주세요:

1. 이 리포지토리를 포크합니다.
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature-branch`).
3. 변경 사항을 커밋합니다 (`git commit -am 'Add new feature'`).
4. 변경 사항을 푸시합니다 (`git push origin feature-branch`).
5. Pull Request를 생성하여 기여를 제출합니다.

모든 기여는 기여 가이드라인에 따라 이루어져야 합니다.

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 확인하세요.

## 👨‍💻 저자

-   **KNU-K**

이 프로젝트에 대한 더 자세한 정보는 [changelog-autogen GitHub 리포지토리](https://github.com/KNU-K/changelog-autogen)에서 확인할 수 있습니다.
