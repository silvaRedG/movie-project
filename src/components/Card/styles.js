import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    border-radius: 30px;
    width: 250px;

    &:hover {
      border: groove 2px #8a05be;
    }
  }

  h3 {
    color: #ffffff;
    margin-top: 15px;
  }
`;
