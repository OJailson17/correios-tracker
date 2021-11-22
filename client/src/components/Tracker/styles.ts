import styled from "styled-components";

export const Container = styled.main`
  width: 90%;
  max-width: 955px;
  margin: 0 auto;
  margin-top: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TrackerDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  margin-bottom: 6rem;

  img {
    width: 95px;
    margin-right: 5px;
  }

  div > span {
    color: #0080c6;
    font-weight: 600;
  }
`;
