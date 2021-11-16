import styled from "styled-components";

export const Button = styled.button`
  align-items: center;
  background-color: transparent;
  bottom: 24px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  position: fixed;
  right: 24px;
  z-index: 1;

  svg {
    fill: ${({ theme }) => theme.primary};
  }
`;
