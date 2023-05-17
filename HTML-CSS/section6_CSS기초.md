## 57. 섹션 주제

**Crucial**

- Conceptual Oberview of CSS
- Basic CSS Syntax
- Including Styles Correctly
- Color Systems: RGB, Hex, etc.
- font-family property

**Important**

- Common Text Properties

## 58. CSS란?

Cascading Style Sheets

문서를 시각적으로 표현하고 나타내기 위해 사용하는 언어

```css
/*CSS RULES*/
selector {
	property: value;
}

h1 {
	color: purple;
}
```

## 59. 방대한 CSS에 당황하지 않기

CSS에는 다양한 속성과 패턴이 있다. 

검색해서 쓰면 되니 당황하지 말 것~!

## 60. 스타일을 올바르게 담기

**CSS 작성 스타일**

1. HTML요소에 직접 스타일 작성 (BAD! ❌)
2. `<head>`에 스타일 요소를 추가하여 CSS 작성 (👎)
3. **외부 스타일시트에서 작성 (👍)**
    - `<link>` 요소를 사용하여 연결 (head 안에 작성)

## 61. 색 및 배경색 속성

**color**

- 텍스트 색상 변경
- 색상이름, 16진수, rgb, hsl, hsla, rgba 등과 같은 방법으로 나타냄

**background-color**

- 배경색 변경

## 62. 색상 시스템: RGB와 알려진 색상

브라우저의 색상은 빨강, 녹색, 파랑으로 구성되며 값은 0~255까지이다.

- red: rgb(255, 0, 0)
- blue: rgb(0, 0, 255)
- purple: rgb(173, 20, 219)
- black: rgb(0, 0, 0)

[https://htmlcolorcodes.com/color-names/](https://htmlcolorcodes.com/color-names/)

[https://htmlcolorcodes.com/color-picker/](https://htmlcolorcodes.com/color-picker/)

## 63. 색상 시스템: 16진법

16진법은 16을 기수로 작성할 수 있는 가짓수가 16개이다. 0~9까지의 숫자와 A~F까지 6개의 문자를 사용한다.

여섯 자리 숫자는 두 개씩 세쌍을 이룬다.

- #ffff00 → ff / ff / 00 → red/green/blue
- rgb보다 헥스코드를 더 많이 씀

## 64. 세미콜론과 CSS

세미콜론은 특성 선언을 마치고 다음 특성으로 넘어간다는 뜻

제대로 작동하지 않는다면 세미콜론을 확인!

## 65. 일반 텍스트 속성

text-align

- 텍스트 정렬. 기본값은 왼쪽으로 정렬되어 있음

font-weight

- 폰트 굵기 조절

text-decoration

- 밑줄, 윗줄, 취소선 등 텍스트를 꾸미는 선을 조정

line-height

- 줄 간격

letter-spacing

- 글자 사이의 간격을 조절

## 66. 픽셀로 글꼴 크기 지정하기

font-size

- Relative
    - EM, REM, VH, VW, %, etc.
- Absolute
    - PX, PT, CM, IN, MM

## 67. 글꼴 집합

font-family

- 폰트의 요소 변경할 때
- font stack : 사용하려는 폰트를 순서대로 적은 목록. 해당 폰트가 없을 때 다음 목록의 폰트로 보여준다.