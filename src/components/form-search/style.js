import styled from "styled-components";

export const Form = styled.form`
  position: relative;

  input {
    background: ${({ theme }) => theme.background};
    border: 1px solid #dddddd;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    color: ${({ theme }) => theme.textColor};
    margin: 0;
    padding: 16px 14px;
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.primary};
      font-size: 12px;
      font-style: normal;
      font-weight: normal;
      line-height: 14px;
    }
  }

  input ~ svg {
    bottom: 0;
    color: ${({ theme }) => theme.primary};
    height: max-content;
    margin: auto;
    position: absolute;
    right: 24px;
    top: 0;
  }
`;
