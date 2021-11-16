import { useEffect, useState } from "react";

import List from "../../components/list/List";
import Button from "../../components/buttons/button/Button";
import FormSearch from "../../components/form-search/FormSearch";
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
        setCharacter(data.results);
      })
      .finally(() => setloading(false));
  }, []);

  const submit = (name) => {
    setloading(true);
    CharacterService.getByQuery({ name })
      .then(({ data }) => {
        setCharacter(data.results);
      })
      .finally(() => setloading(false));
  };

  return (
    <>
      <FormSearch submit={(search) => submit(search)} />
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
    </>
  );
}

export default Character;
