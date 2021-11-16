import { Card, Thumb, Content } from "./style";

function CardCharacter({ children, src, description }) {
  return (
    <Card>
      <Thumb loading="lazy" src={src} alt={description} />
      <Content>{children}</Content>
    </Card>
  );
}

export default CardCharacter;
