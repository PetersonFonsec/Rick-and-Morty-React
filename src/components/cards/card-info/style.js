import styled from "styled-components";

export const Card = styled.div`
  background: var(--background);
  border: 1px solid rgba(158, 158, 158, 0.6);
  border-radius: 4px;
  color: var(--text-color);
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

  app-button {
    display: block;
    margin-top: auto;
  }
`;
