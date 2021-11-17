import { useEffect, useState } from "react";

import Modal from "react-modal";

import EpisodeService from "../../shared/services/episode";

import List from "../../components/list/List";
import Button from "../../components/buttons/button/Button";
import FormSearch from "../../components/form-search/FormSearch";
import CardInfo from "../../components/cards/card-info/CardInfo";

function Episode() {
  const [episode, setEpisode] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const [episodeIndex, setEpisodeIndex] = useState(0);
  const [modal, setModal] = useState(false);

  const emptyList = (nameEpisode) => (
    <span>
      Nenhum episodio encotrado com o termo <br />
      <strong>{nameEpisode}</strong>
    </span>
  );

  useEffect(() => {
    setLoading(true);

    EpisodeService.getAll()
      .then(({ data }) => {
        setEpisode(data.results);
      })
      .finally(() => setLoading(false));
  }, []);

  const submit = (name) => {
    setLoading(true);
    setSearch(name);

    EpisodeService.getByQuery({ name })
      .then(({ data }) => {
        setEpisode(data.results);
      })
      .catch(() => setEpisode([]))
      .finally(() => setLoading(false));
  };

  const openModal = (index) => {
    setModal(true);
    setEpisodeIndex(index);
  };

  return (
    <main>
      <FormSearch submit={(search) => submit(search)} />

      <Modal
        isOpen={modal}
        ariaHideApp={false}
        onRequestClose={() => setModal(false)}
      >
        <div className="content">
          <p>
            <strong>name:</strong> {episode[episodeIndex]?.name}
          </p>
          <p>
            <strong>air_date:</strong> {episode[episodeIndex]?.air_date}
          </p>
          <p>
            <strong>episode:</strong> {episode[episodeIndex]?.episode}
          </p>

          <p>
            <strong>characters:</strong>{" "}
            {episode[episodeIndex]?.characters.length}
          </p>

          <Button onClick={() => setModal(false)}>Close</Button>
        </div>
      </Modal>

      <List loading={loading} emptyList={emptyList(search)}>
        {episode.map(({ name, air_date, episode }, i) => (
          <CardInfo key={i}>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Air date:</strong> {air_date}
            </p>
            <p>
              <strong>Episode:</strong> {episode}
            </p>

            <Button onClick={() => openModal(i)}>Visualize</Button>
          </CardInfo>
        ))}
      </List>
    </main>
  );
}

export default Episode;
