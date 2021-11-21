import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: block;
  margin: 0 auto;
  margin-bottom: 55px;

  h2 {
    font-weight: 500;
    color: #0080c6;
  }

  span {
    font-weight: 500;
    font-size: 17px;
  }
`;

export const SearchBar = styled.form`
  max-width: 955px;
  display: flex;
  position: relative;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;

  input {
    width: 100%;
    height: 40px;
    border-radius: 15px;
    border: 2px solid rgba(0, 0, 0, 0.65);
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    outline: none;

    &::placeholder {
      font-size: 13px;
      font-weight: 500;
    }
  }

  button.search-btn {
    width: 60px;
    height: 100%;
    background-color: #ffd400;
    position: absolute;
    right: 0;
    border: none;
    border-radius: 0 15px 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    & > i {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;
