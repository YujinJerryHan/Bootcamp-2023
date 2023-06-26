# 섹션 24-25 : DOM

# DOM이란?

문서 객체 모델(The Document Object Model, 이하 DOM) 은 HTML, XML 문서의 프로그래밍 interface 이다. DOM은 문서의 구조화된 표현(structured representation)을 제공하며 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공하여 그들이 문서 구조, 스타일, 내용 등을 변경할 수 있게 돕는다. DOM 은 nodes와 objects로 문서를 표현한다. 이들은 웹 페이지를 스크립트 또는 프로그래밍 언어들에서 사용될 수 있게 연결시켜주는 역할을 담당한다.

## 1. SELECTING

### getElemenetBy…

- getElementById
- getElementsByTagName
- getElementsB  yClassName

### querySelector

- querySelector : 일치하는 요소 중에서 **첫 번째** 값 반환
    - `document.querySelector(’img:nth-of-type(2)’)` : 두번째로 일치하는 값도 가능
    - `document.querySelector(’a[title]=”java”]’)`
- querySelectorAll : 일치하는 **모든** 요소를 반환

## 2. MANIPULATE

![DOM MANIPULATE](/JavaScript/imgScreenshot/DOM.png)

- innerText : display:none 속성값은 반환하지 않음
- textContent : 숨긴 요소까지 반환
- innerHTML : 마크업 요소 적용 (innerText는 ❌)

- setAttribute
- getAttribute
- style.width 등

- ClassList
    - remove
    - add
    - toggle
    - etc
    
    ```
    div.classList.remove("foo");
    div.classList.add("anotherclass");
    ```
    
- parentElement
- append : 객체의 기존 키에 새 값을 추가하거나, 키가 없는 경우 키를 추가한다.
- appendChild : 한 노드를 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙인다.
- prepend : 어떤 항목을 요소의 첫 번째 자녀로 삽입시킨다.

DOM Event