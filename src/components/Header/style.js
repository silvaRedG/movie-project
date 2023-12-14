import styled from "styled-components";

export const Container = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 10%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 70%;
`;

export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 28px;
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: "";
    height: 3px;
    width: ${(props) => props.isActive ? "100%" : 0};
    background-color: yellow;
    position: absolute;

    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);

    transition: width 0.5s ease-in-out;
  }

  &:hover::after{
    width: 100%;
  }
`;
