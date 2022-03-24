## 설치 파일

1. [node](https://nodejs.org/en/)
2. [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

## 프로젝트 초기화 순서

- `yarn`
  > `package.json` 의 의존성 모듈을 설치 합니다.
- `nvmuse`
  > `.nvmrc` 의 node 버전을 따릅니다.
- `.env-cmdrc` 환경설정 파일
  > 위 환경 설정 파일 이름으로 아래 json 내용의 파일을 생성 합니다.
  ```json
  {
    "renderer": {
      "target": "web"
    },
    "main": {
      "target": "electron-main"
    },
    "prod": {
      "mode": "production"
    },
    "local": {
      "mode": "development"
    }
  }
  ```

---

## 프로젝트 실행

1. `yarn build:local:main`
2. [`yarn start:local:web`](http://localhost:9091)
3. `yarn se`

---

## 패키징 명령어

윈도우 환경 production 모드 패키징 `yarn pack:elec:win:prod`

맥 환경 production 모드 패키징 `yarn pack:elec:mac:prod`
