# 나의 감정 사진관
## 1. 서비스 이름 및 간단한 소개

### 나의 감정 사진관 [emotion studio]

누구나 한 번쯤 느끼는 외로운 감정을 **되돌아보고**, 타인과 **공유하는** 플랫폼. 

- 외로움을 느끼는 사용자는 **심리 상태 설문지**를 통해 자신의 감정을 되돌아본다.
- 해당 심리 상태를 반영한 AI 그림은 ‘**나의 감정 프린터**’를 통해 생성된다.
- 해당 그림을 **sns**을 통해 타인과 공유하여 감정의 공감대를 형성한다.

## 2. 주요기능

1. 오늘의 감정을 정리할 수 있는 [감정 체크 리스트] 항목을 통해 ‘나’의 감정을 체크한다.
2. [감정 체크 리스트]를 반영한 AI 그림 이미지가 [감정프린터]에서 출력한다.
3. 출력된 그림을 보면서 유저는 여러가지 복합적인 감정을 압축적으로 회고한다.
4. 자신의 감정을 나타낸 그림을 유저가 인스타그램/카카오톡에 공유함으로써 **1) 자신의 감정을 지인과 나누고, 2) 공유된 그림에 대한 호기심이 해당 유저에 대한 관심을 환기**시킨다.

## 3. 팀원 역할 분담

```
## 👨‍💻 팀원 정보
<table>
    <tr align="center">
        <td style="min-width: 150px;">
            <a href="https://github.com/seojisoosoo">
              <img src="https://github.com/seojisoosoo.png" width="100">
              <br />
              <b>서지수</b>
            </a> 
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/kwonET">
              <img src="https://github.com/kwonET.png" width="100">
              <br />
              <b>권보미</b>
            </a>
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/eunbeann">
              <img src="https://github.com/eunbeann.png" width="100">
              <br />
              <b>권은빈</b>
            </a> 
        </td>
    </tr>
    <tr align="center">
        <td>
            Web FE
        </td>
        <td>
            Web FE
        </td>
        <td>
            Web FE
        </td>
    </tr>
</table>


### 👨‍💻 팀원 정보

<table>
    <tr align="center">
        <td>
            ✨ 서지수
        </td>
        <td>
        - 초기세팅, 공용 컴포넌트
        </td>
    </tr>
    <tr align="center">
        <td>
            ✨ 권보미
        </td>
        <td>
        - 공유 결과 뷰
        </td>
    </tr>
    <tr align="center">
        <td>
            ✨ 권은빈
        </td>
        <td>
        - 감정 선택 뷰
        </td>
    </tr>
</table>
```

## 4. 컨벤션 규칙 노션 링크

[솝커톤을 향한 열정은 1톤이들의 컨벤션 규칙](https://www.notion.so/1-bef8d013c4204ee898d580b755957354) 

## 5. 브랜치 전략

- 브랜치명은 **feat#이슈번호-페이지명/기능명**
    - main > 각자의 브랜치
        - `EX`
        `main` ← `feat#이슈번호-페이지명/기능명`
        main ← 각자의 브랜치로 pull request 하고 코드 리뷰 후 merge

## 5.1. **Issue**

- 기능별로 Issue 파기 ( feat, fix, refactor, etc)
이슈제목은 `[ 페이지명 ] - 기능명` 으로 하실게요~
    - 작업할 이슈에 대해 Label & assign 꼭 달아주세요!
    

## 5.2. **Pull Request**

- 작업 다 하면 PR 올리고 웹파트원 리뷰어 등록 & Label 달아놓기 & PR 템플릿에 맞게 작업내용 기록해두기
    - PR 제목은 브랜치명으로 할게요~~
    - 코드리뷰 다 못해도 한 명이상 확인하면 머지하기!

## 5.3. 커밋 컨밴션

- 꼭 커밋 단위를 ‘쪼개서' 올려주세요!!🔥🔥

| [ feat ]  | 새로운 기능이 추가되었을 때 ex. [ feat ] 마이페이지 구현 |
| --- | --- |
| [ fix ]  | 버그를 고친 경우 |
| [ design ]  | css 혹은 UI를 생성 & 변경한 경우 |
| [ style ]  | 코드포맷 변경 (기능에 변화가 없는 경우) |
| [ refactor ]  | 더 좋은 코드로 개선한 경우 ( 기능에 변화가 없는 경우) ex) 코드리뷰 반영 |
| [ docs ]  | readMe 등 문서를 추가한 경우 |
| [ test ]  | 테스트코드 작성 |
| [ etc ]  | 이 외 잡일들~ |
