import { Card, Wrapper } from "./style";

function CardComponent({ children }) {
  return (
    <Card>
      <Wrapper>{children}</Wrapper>
    </Card>
  );
}

export default CardComponent;
