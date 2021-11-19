import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  img {
    width: 175px;
    margin-bottom: 40px;
  }

  h1 {
    font-size: 30px;
  }

  & > div {
    width: 90%;
    max-width: 955px;
    background-color: rgba(255, 0, 0, 0.3);
    display: flex;
    justify-content: space-center;
    align-items: center;
    padding: 15px;
    margin-top: 15px;
    border-radius: 10px;

    i {
      align-self: flex-start;
      color: red;
      margin-right: 10px;
      font-size: 18px;
    }
  }
`;
