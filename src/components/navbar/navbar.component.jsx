import styled from "styled-components";

import siteName from "@/assets/sitename.png";

import "./navbar.style.js";

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 80px;
  background-color: #000000;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const Link = ({ children, href, ...otherProps }) => {
  return (
    <StyledLink {...otherProps}>
      <a href={href}>{children}</a>
    </StyledLink>
  );
};

const StyledLink = styled.li`
  height: 100%;
  padding: 15px 24px;
  cursor: pointer;

  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "transparent"};
  color: ${(props) => (props.fColor ? props.fColor : "white")};

  &:last-child {
    margin-left: 16px;
  }

  &:nth-child(-n + 3) {
    padding: 15px 16px;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <img src={siteName} />
      <List>
        <Link>關卡資訊</Link>
        <Link>攻略資源</Link>
        <Link>求職專區</Link>
        <Link fColor="black" bgColor="#FFE600">
          註冊報名
        </Link>
        <Link fColor="black" bgColor="#FFE600">
          登入
        </Link>
      </List>
    </Container>
  );
};

export default Navbar;
