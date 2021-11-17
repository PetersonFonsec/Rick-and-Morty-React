import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.background};
  border: 1px solid rgba(158, 158, 158, 0.6);
  border-radius: 4px;
  color: ${({ theme }) => theme.textColor};
  height: 100%;
  padding: 8px 14px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  p {
    flex: 1;
  }

  p:not(:last-child) {
    margin-bottom: 8px;
  }

  button {
    display: block;
    margin-top: auto;
  }
`;
