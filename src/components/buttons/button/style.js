import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textColorContrast};
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  padding: 12px 14px;
  transition: ${({ theme }) => theme.transition};
  width: 100%;

  &:hover {
    filter: brightness(0.8);
  }
`;
