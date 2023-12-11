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
    width: 20%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`;

export const Li = styled.li`
  
  font-weight: 600;
  cursor: pointer;
  font-size: 30px;


  a{
    text-decoration: none;
    color: #ffffff;
    
  }
`;
