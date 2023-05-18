## 82. 섹션 주제

**Crucial**

- Width & Height
- Border
- Padding
- Margin
- Display Property
- Units - Percentages, EMS, & REMS

**Nice To Have**

- Border Radius

## 83. 박스 모델: 가로와 세로

브라우저 안의 모든 요소는 박스 형태로 구분한다

div에 width, height 속성을 주어 크기 변경

## 84. 박스 모델: 테두리와 모깎기

border-width

border-color

border-style

box-sizing

border-left-style

border-radius

## 85. 박스 모델: padding

콘텐츠와 테두리 사이의 공간

**Apply to all four sides**

- padding: 10px

**vertical | horizontal**

- padding: 5px 10px;

**top | right | bottom | left**

- padding: 5px 1px 0 2px;

## 86. 박스 모델: margin

한 요소와 다른 요소의 테두리 간의 간격

padding 을 적용할 때와 같은 방법 

## 87. 디스플레이 속성

**인라인 요소 vs 블럭 요소**

- 인라인 : 다른 요소들과 같은 라인에 배치
- 블럭 : 한 라인에 하나씩 차지

**display 속성으로 기본 블럭 요소를 인라인 속성으로 변경할 수 있다.**

```css
h1 {
display : inline;
}
span {
display: block;
}
```

인라인 요소에 width, height 적용되지 않음. padding은 적용되고, margin은 가로 방향에만 적용 됨.

블럭 요소에 width, height, padding, margin 모두 적용됨.

인라인 블럭요소에는 인라인 요소에 적용되지 않았던 margin까지 적용됨.

## 88. CSS 단위 복습

**% (percentages)**

- 다른 값과 상대적
- 자식 요소에 %값을 주면 부모 너비의 n%값을 차지

## 89. CSS 단위: ems

**em (엠)**

- 상대적 단위 (relative)
- 글꼴 크기를 1em으로 설정하면 부모요소와 같은 크기로 설정
- 2em은 2배의 크기
- 여백의 em은 폰트사이즈에 좌우됨

## 90. CSS 단위: rems

**rem (root em)**

- em의 단점 보완
    - em은 중첩된 자식요소가 있을 경우, 단계별로 누적되는 효과가 있다
- rem은 부모 요소의 크기에 따라 바꾸지 않고, 루트 HTML 요소의 글씨 크기에 따라 바뀐다