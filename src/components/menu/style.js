import styled from "styled-components";

export const List = styled.ul`
  align-items: center;
  display: flex;
  background: ${({ theme }) => theme.background};
  border: 1px solid #e2e6de;
  border-radius: 88px;
  bottom: 24px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  justify-content: space-between;
  left: 0;
  margin: auto;
  max-width: 260px;
  padding: 12px 22px;
  position: fixed;
  right: 0;
  transition: 0.3s ease-in-out all;

  a {
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    font-size: 24px;
    transition: ${({ theme }) => theme.transition};
  }

  a.active {
    background-color: ${({ theme }) => theme.primary};
    border-radius: 8px;
    color: #fff;
    display: block;
    font-size: 18px;
    height: 38px;
    padding: 8px;
    transform: translateY(-18px);
    width: 38px;
  }
`;
