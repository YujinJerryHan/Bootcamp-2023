## 101. 섹션 주제

- Media Queries
- FOUCUS ON CONCEPTS, NOT MEMORIZING THE PROPERTIES!
- Flex Shorthand
- Flex-basis, grouw, and shrink
- Align-Items
- Flex-wrap
- Align-content and align-self
- Justify-Content
- Flex-Direction

## 102. Flexbox가 대체 뭐야?

요소의 크기(width 등)를 px로 하드코딩 하면, 창을 줄일 때 문제가 생긴다. 비율을 맞춰놔도 쪼그라듦.

하지만, 창이 작아져도 공간 배분의 원칙은 유지된다.

Flexbox의 핵심! 하나의 컨테이너 안에서 어떤 요소를 크게 하고 어떤 요소를 작게 할지, 요소들 사이에 공간을 얼마나 띄우고 요소들을 각각 어디에 배치할지, 요소들 사이의 공간을 균등하게 만들지 말지 레이아웃을 유연하게 조정할 수 있다.

## 103. Flex-Direction

Flexbox는 여러 속성으로 구성된다. 

**display:flex**

**flex-direction**

- 컨테이너 안에서 본축 방향을 결정하는 속성
- 기본값은 flex-direction:row;
- row-reverse : 수평 반대 방향
- column : 수직 방향

## 104. Justify-Content

주축을 기준으로 요소와 콘텐츠를 어떻게 배치할지 결정하는 속성

**justify-content**

- 기본값은 flex-start
- center
- space-between : 바깥 여백 다 없애고 요소 사이에 간격을 띄운ㄴ다
- space-around : 요소들의 둘레에 똑같은 면적에 여백 부여. 바깥 여백 O
- space-evenly : 요소 사이, 요소와 컨테이너 사이에도 동일한 크기의 여백을 줌

## 105. Flex-Wrap

교차축에 영향 (주축이 세로라면 교차축은 가로)

flex-item요소들이 강제로 한줄에 배치되게 할 것인지, 또는  가능한 영역 내에서 벗어나지 않고 여러행으로 나누어 표현할 것인지 결정하는 속성

**flex-wrap**

- wrap
- wrap-reverse
- nowrap

## 106. Align-Items

**align-items**

- 교차축에 따라 아이템을 배열 (↔ justify-content: 주축을 따름)
- start
- end
- center
- stretch

**baseline**

- 글자를 잇는 밑줄

## 107. Align-Content & Align-Self

**align-content**

- 여러 행, 열이 있을 때 사용
- 열 or 행 사이의 공간을 조정한다

**align-self**

- 단일 요소에 사용

## 108. Flex-Basis, Grow, & Shrink

**flex-basis**

- 요소가 배치되기 전에 요소의 최초 크기 결정
- flex-basis가 설정되어 있으면 width는 무시된다

**flex-grow**

- 공간이 있을 때 그 공간을 얼마나 차지할지 정함

**flex-shrink**

- 설정된 숫자값에 따라 `flex-container` 요소 내부에서 `flex-item` 요소의 크기가 **축소**됩니다.
- 숫자 커질수록 더 축소 (0은 변화 없음)

## 109. Flex Shorthand

**flex**

- flex-grow, flex-shrink, flex-basis 세가지 속성을 한번에 설정할 수 있다

## 110. 반응형 디자인 및 미디어 쿼리 개요

반응형 디자인

- 휴대폰처럼 작은 기기 or 아주 큰 모니터를 사용할 때 or 기기의 방향에 따라 페이지 레이아웃 변한다
- 미디어 쿼리를 통해 매개변수에 따라 새로운 스타일을 넣을 수 있다

## 111. 미디어 쿼리의 능력

```css
@media (max-width: 400px) { 
    h1 {
        color: red;
    }
}

@media (orientation: landscape) {
    body {
        background-color: aquamarine;
    }
}
```

## 112. 반응형 내비게이션 바 제작하기