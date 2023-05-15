## 31. 섹션 주제

## 32. HTML5가 정확히 무엇인가?

mdn : HTML5 is the latest evolution of the standard that defines HTML.

HTML5는 다운로드하거나 설치하는 새로운 버전이 아니라 그저 문서의 한 버전이다.

추가된 새로운 요소로는 비디오, 오디오 등..

Chrome, Firefox, Edge 등의 브라우저에서 그것들을 사용하고 구현한다.

## 33. 블록 vs 인라인 요소 - Div와 Span

문단(p태그)은 혼자서 한 줄, 한 블록을 모두 차지한다.

반대로 앵커 태그는 콘텐츠가 있는 영역만 차지한다.

div와 span은 일종의 제네릭 컨테이너

### div

- The Content Division element
- 콘텐츠를 분할하는 요소
- div로 여러 요소를 감싸서 그룹화 하고 스타일을 지정할 수 있다.

### span

- 제네릭 컨테이너이고 인라인이다
- 인라인 요소라서 전체 블록을 차지하지 않는다
- 텍스트나 콘텐츠를 span으로 감싸고 하나의 그룹으로 묶어서 css로 스타일을 지정할 수 있다.

## 34. 기타 요소 모음 - HR, BR, Sup, Sub

`<hr>`  (horizontal rule)

- 닫는 태그 없음
- 내용이나 속성을 부여할 필요 없음
- 기본적인 기능은 스크린에 수평선을 하나 만드는 것 (줄 나누듯)

`<br>`

- 줄바꿈

`<sup>` ,  `<sub>`

- The Superscript element / The Subscript elemet
- 윗첨자와 아랫첨자
- 윗첨자는 기준선보다 더 위에 떠있는 텍스트

```html
<h2>가나다라<sup>마</sup><sub>바</sub>사</h2>
```

## 35. 엔티티 코드

- HTML 대신 쓸 수 있는 특별한 코드 또는 시퀀스
- &hearts; 처럼 &로 시작해서 ;로 끝난다
- 타이핑 하기 어려운 글자(저작권 기호, 다이아몬드 모양 십자가, 화살표 등)

[https://html.spec.whatwg.org/multipage/named-characters.html](https://html.spec.whatwg.org/multipage/named-characters.html)

## 36. 시맨틱 마크업 개요

Semantic - relating to meaning

시맨틱 마크업 : 의미있는 마크업

div로만 분류하면 목적이 뭔지 알 수 없고 그저 내용만 담고 있음.

main, header, nav, section, article, footer 등으로 구분하면 모두 div와 같은 기능이지만 각자의 의미와 전체적인 구조를 알 수 있다.

1. 크롤러가 더 쉽게 코드를 알아보도록, 다른 어플리케이션 또는 코드와 더 잘 융합되도록 하기 위해
2. 접근성 : 스크린 리더를 쓰는 사람들이 코드에 더 쉽게 접근할 수 있도록 하기 위해서

## 37. 시맨틱 요소 사용법

## 38. 스크린 리더 데모

## 39. VSCode 팁 : 에밋