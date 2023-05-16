## 40. 섹션 주제

**Crucial!**

- Table Basics: `<table>`, `<tr>`, `<td>`, `<th>`
- Form Element Basics
- Button Elements
- Lables
- Common Input Types

**Important**

- Table Sections: `<thead>`, `<tfoot>`, `<tbody>`
- Range & Text Areas
- Form Validations

**Nice To Have**

- Table Colspan and Rowspan

## 41. 섹션 목표

표(2차원 데이터 테이블)와 폼에 대해 배운다.

## 42. HTML 테이블 개요

## 43. 테이블: TR, TD, Th 요소

`<td>` : The Table Data Cell element

`<tr>` : The Table Row element

`<th>` : The Table Header element

```html
<table>
      <tr>
        <th>Animal</th>
        <th>Average mass </th>
      </tr>
      <tr>
        <td>Ostrich</td>
        <td>104(230)</td>
      </tr>
      <tr>
        <td>Somali Ostrich</td>
        <td>90 (200)</td>
      </tr>
</table>
```

## 44. 테이블: Thead, Tbody, Tfoot 요소

`<thead>` : The Table Data Cell element

`<tfoot>` : The Table Row element

`<tbody>` : The Table Body element

표가 복잡해질 때 헤드, 바디, 풋으로 구분할 수 있다.

## 45. 테이블: Colspan & Rowspan

colspan : 행 합치기

rowspan : 열 합치기

## 46. 폼(Form)요소

`<form>`

- =container. 개별 입력란을 하나로 묶은 것
- 폼 요소는 제출했을 때 폼 데이터를 어디로 보낼지 지시함.
- action : url은 정보를 보낼 목적지
    - get/post (HTTP 메서드에 대한 두 가지 값)

## 47. 일반적인 입력 형식

`<input>`

- 가장 일반적인 폼 컨트롤. 닫는 태그 없음.
- 20개 이상의 입력란을 만들 수 있다 (체크박스, 색상 선택기, 날짜 선택기, 텍스트 입력란 …)
- type 속성
    - text, password, color, number, radio, range 등
- placeholder
    - 입력란의 임시 텍스트를 지정 (ex. 아이디를 입력해주세요)

## 48. 가장 중요한 레이블

`<label>`

- 인라인 요소
- `input` id와 똑같은 값을 `label` 태그의 for 속성에 지정한다
- lable과 input을 연결하는 폼을 사용하기 (스킵 ㄴㄴ)

```html
<p>
    <label for="number">Enter a number: </label>
    <input type="number" />
</p>
```

## 49. HTML 버튼

`<button>`

- form 안에 있는 button을 누르면 form action의 url로 이동한다.
- button의 type이 ‘button’일 경우에는 폼 제출 하지 않음. (그냥 버튼)

**type이 submit인** `<input>`

- value 값으로 버튼의 텍스트를 바꿀 수 있다

```html
<input type="submit" value="Click Me!">
```

## 50. name 속성

```html
<label for="username">Enter a username: </label>
<input id="username" type="text" placeholder="username" name="username"/>
```

- input 속성 name에 값(username)을 주고, 페이지에 입력값을 작성 한 뒤, 폼을 전송하면 *form.html?username=입력값* 으로 이동하게 된다.
- 위 값이 데이터를 서버로 전송할 때 사용되는 name이다.
- button이 없는 경우에도 input에 값을 입력하고 엔터키를 누르면 제출된다.

## 51. 구글과 레딧 검색하기

input의 name 속성을 이용하여 다양한 페이지에서 검색을 할 수 있다

```html
<h3>Search Google</h3>
    <form action="http://www.google.com/search">
      <input type="text" name="q" />
      <button>Search Google</button>
    </form>
<h3>Search YouTube</h3>
    <form action="http://www.youtube.com/search">
      <input type="text" name="search_query" />
      <button>Search YouTube</button>
    </form>
```

## 52. 라디오 버튼, 체크박스와 선택창

**input type=”checbox”**

- checked 속성을 추가하면 체크된 상태로 로딩

**input type=”radio”**

- 하나만 선택하는 속성
- name의 값을 동일하게 주어 하나로 묶을 수 있다
- 선택한 radio의 value 값이 전송된다

`<select>`

- select 내에서 option을 사용한다
- selected 옵션으로 미리 선택되어 있게 한다

## 53. 범위 및 텍스트 영역

range

- min, max 설정할 수 있다

textarea

- cols, rows로 입력란의 크기를 조정
- placeholder

## 54. HTML5 폼의 유효성 검사

## 55. 마라톤 선수 등록 양식 만들기 : 문제

## 56. 마라톤 선수 등록 양식 만들기 : 정답