import styled from 'styled-components';

export const Container = styled.div`
  background: #f5f5f5;
  
`;

export const InputContent = styled.div`
  height: 100vh;
  width: 900px;
  margin: 0 auto;
  position: relative;

  h2 {
    padding-top: 60px;
    color: #ee4d64;
  }

  textarea {
    margin: 15px 0;
    width: 100%;
    height: 120px;
    padding: 5px;
    border: 1px solid #ee4d64;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
    background: #ee4d64;
    height: 45px;
    padding: 5px 20px;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
  }

  hr {
    color: #ee4d64;
    margin: 15px 0;
  }
`;
