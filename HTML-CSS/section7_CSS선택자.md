## 68. 섹션 주제

**Crucial**

- Element Selector
- Class Selector
- ID Selector
- Descendent Selector
- CSS Specificity : 우선순위. 스타일이 상충할 경우 CSS가 적용할 스타일 선택

**Important**

- Adjacent Selector
- Direct Descendent Selector
- Attribute Selector
- Pseudo Elements
- Pseudo Classes

## 69. 전체 요소 선택자

모든 요소(*)를 선택하여 변경

```css
* {
color: black;
}
```

## 70. ID 선택자

```css
#signUp {
color: black;
}
```

- 쉽고 의미있고 짧게
- 띄어쓰기 ❌
- 앞에 #우물정자를 붙임

## 71. 클래스 선택자

클래스는 여러 요소에 적용된다. 반복되는 요소를 묶어 스타일링한다.

```css
.tag {
	color:orange;
}
```

## 72. 자손 선택자

```css
li a {
	color: teal;
}
```

- li 태그에 연결된 a태그를 선택

## 73. 인접 선택자와 직계 자손 선택자

```css
h1 + p {
	color: red;
}
```

- 인접 선택자 : h1 다음에 오는 p 태그 선택

```css
div > li {
	color: white;
}
```

- 직계 자손 선택자 : div 안에 있는 li 태그 선택

## 74. 속성 선택자

특정 속성을 가진 요소를 선택할 수 있다.

```css
/*type='text'인 모든 input 선택*/
input[type='text'] {
	width: 300px;
	color: yellow;
}

/*post라는 클래스가 있는 section만 선택. (잘 안씀)*/
section.post {
	color: red;
}

/*href 속성에 example이 포함된 모든 앵커 태그*/
a[href*='example'] {}
```

## 75. 유사 클래스

:**hover**

- 커서가 올려져 있는 상황에서의 효과

:**active**

- 활성화 될 때 (버튼 - 클릭)

:**checked**

- radio, checkbox 선택했을 때

:**nth-of-type**

- n번째 타입의 요소 스타일링

그 외

- **:first, :first-child, not(), nth-child()** 등이 있다

## 76. 유사 요소

선택된 요소의 특정 부분만 선택

- ::first-letter
- ::first-line
- ::selection
- ::after
- ::before

## 77. 계단식 CSS

Cascade

```css
h1{
	color: red;
}
h1{
	color: blue;
}
/* Blue wins!~ */
```

## 78. 우선순위 CSS

하나 이상의 스타일이 동일한 요소에 적용되거나 적용될 수 있는 경우에는 충돌 발생

### 우선순위 : ID > CLASS > ELEMENT

[https://specificity.keegan.st/](https://specificity.keegan.st/)

## 79. 팁: Chrome 개발자 도구와 CSS

취소선이 있는 요소는 경쟁에서 밀린 것

개발자 도구 잘 활용하삼

## 80. 인라인 스타일과 중요도

인라인 스타일은 id, class, element 보다 명시적인 선택자

실제로 쓰는 사람은 거의 없지만 알아두자

```css
.foo[style*='color: red'] {
	color: firebrick !important;
}
```

## 81. 상속 CSS

CSS 상속이란 구체적인 특성을 지정하지 않은 하위 요소에 상위 항목 특성이 적용되는 것