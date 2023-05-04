---
date: '2023-02-27'
title: '@emotion 에서 props 사용하기'
categories: ['React.js', '@emotion']
summary: 'React.js 와 @emotion 을 적용하여 Styled Component 를 생성했을 때, 그 컴포넌트에 props 를 어떻게 전달하여 사용하는가?'
thumbnail: './ReactJS-lautaro-andreani-xkBaqlcqeb4-unsplash.jpg'
---

## @emotion 에서 CSS 옵션을 작성하는 방식은 크게 2가지가 있다.
- 백틱(``)을 이용해서 작성하기
- Object(`{ }`) 형식으로 작성하기

### 각각을 코드로 표현하면 다음과 같다.

* Object 방식
  ```jsx
  // 카페 메뉴의 이미지를 담을 MenuImage 컴포넌트
  const MenuImage = styled.div(
    {
      margin: '50px auto 30px auto',
      borderRadius: '50%',
      width: '150px',
      height: '150px',
      border: '2px solid orange'
    }
  );
  ```

* 백틱(``) 방식
  ```jsx
  // 카페 메뉴의 이미지를 담을 MenuImage 컴포넌트
  const MenuImage = styled.div`
    margin: '50px auto 30px auto',
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    border: '2px solid orange'
  `;
  ```
  
## 위 스타일드 컴포넌트에 `props` 를 전달해서 사용하려면 어떻게 해야할까?
* `<MenuImage>` 컴포넌트에 이미지 url 을 전달하기 위해 `url` 이라는 props 를 전달한다.
  ```jsx
  export default function MenuContainer() {
    return (
      <MenuContainerStyle>
        {menuList.map((menu) => (
          <Menu key={menu.name}>
            <MenuImage url={menu.imageURL} />  // url 이라는 props 전달
            <MenuName>{menu.name}</MenuName>
          </Menu>
        ))}
      </MenuContainerStyle>
    );
  }
  ```

### Object 방식으로 작성한 styled component 에서 props 사용하기
  ```jsx
  // 1) Object 형식으로 styled component 를 작성할 때
  const MenuImage = styled.div(
    {
      margin: '50px auto 30px auto',
      borderRadius: '50%',
      width: '150px',
      height: '150px',
      border: '2px solid orange',
    },
      // props 사용하기
    (props) => ({
      background: `url("${props.url}") center/100% no-repeat`,
    }),
  );
  ```
### 백틱 방식으로 작성한 styled component 에서 props 사용하기
  ```jsx
  const MenuImage = styled.div`
    margin: 50px auto 30px auto;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    background: url("${(props) => props.url}") center/100% no-repeat;
  `;
  ```