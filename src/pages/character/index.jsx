import { useEffect, useState } from "react";
import List from "../../components/list/List";
import Button from "../../components/buttons/button/Button";
import CardCharacter from "../../components/cards/card-character/CardCharacter";
import CharacterService from "../../shared/services/character";

function Character() {
  const [character, setCharacter] = useState([]);
  const [loading, setloading] = useState(false);

  const emptyList = (nameCharacter) => (
    <span>
      Nenhum episodio encotrado com o termo <br />
      <strong>{nameCharacter}</strong>
    </span>
  );

  useEffect(() => {
    setloading(true);

    CharacterService.getAll()
      .then(({ data }) => {
        console.log(data);
        setCharacter(data.results);
      })
      .finally(() => setloading(false));
  }, []);

  return (
    <List loading={loading} emptyList={emptyList("xablau")}>
      {character.map(({ image, name, status }, i) => (
        <CardCharacter key={i} src={image} description={name}>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>status:</strong> {status}
          </p>

          <Button>Visualize</Button>
        </CardCharacter>
      ))}
    </List>
  );
}

export default Character;
