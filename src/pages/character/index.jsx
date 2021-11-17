import { useEffect, useState } from "react";

import Modal from "react-modal";

import List from "../../components/list/List";
import Button from "../../components/buttons/button/Button";
import FormSearch from "../../components/form-search/FormSearch";
import CardCharacter from "../../components/cards/card-character/CardCharacter";
import CharacterService from "../../shared/services/character";

function Character() {
  const [characters, setCharacters] = useState([]);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");

  const emptyList = (nameCharacter) => (
    <span>
      Nenhum episodio encotrado com o termo <br />
      <strong>{nameCharacter}</strong>
    </span>
  );

  useEffect(() => {
    setLoading(true);

    CharacterService.getAll()
      .then(({ data }) => {
        setCharacters(data.results);
      })
      .finally(() => setLoading(false));
  }, []);

  const submit = (name) => {
    setLoading(true);
    setSearch(name);

    CharacterService.getByQuery({ name })
      .then(({ data }) => {
        setCharacters(data.results);
      })
      .catch(() => setCharacters([]))
      .finally(() => setLoading(false));
  };

  const openModal = (index) => {
    setModal(true);
    setCharacterIndex(index);
  };

  return (
    <main>
      <FormSearch submit={(search) => submit(search)} />
      <Modal
        isOpen={modal}
        ariaHideApp={false}
        onRequestClose={() => setModal(false)}
      >
        <img
          alt={characters[characterIndex]?.name}
          src={characters[characterIndex]?.image}
          height="300"
          width="300"
        />
        <div className="content">
          <p>
            <strong> Name:</strong> {characters[characterIndex]?.name}
          </p>
          <p>
            <strong> Status:</strong> {characters[characterIndex]?.status}
          </p>
          <p>
            <strong> Species:</strong> {characters[characterIndex]?.species}
          </p>
          <p>
            <strong> Type:</strong> {characters[characterIndex]?.type}
          </p>
          <p>
            <strong> Gender:</strong> {characters[characterIndex]?.gender}
          </p>

          <Button onClick={() => setModal(false)}>Close</Button>
        </div>
      </Modal>

      <List loading={loading} emptyList={emptyList(search)}>
        {characters.map(({ image, name, status }, i) => (
          <CardCharacter key={i} src={image} description={name}>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>status:</strong> {status}
            </p>

            <Button onClick={() => openModal(i)}>Visualize</Button>
          </CardCharacter>
        ))}
      </List>
    </main>
  );
}

export default Character;
