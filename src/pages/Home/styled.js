import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    box-sizing: border-box;
  }
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 1.5rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem 0 0 0.25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 1.5rem;
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
  border-radius: 0 0.25rem 0.25rem 0;
  padding: 0 0.5rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 0.75rem;
  color: red;
  margin-top: 1rem;
`;
