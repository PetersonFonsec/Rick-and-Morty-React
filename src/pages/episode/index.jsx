import { useEffect, useState } from "react";

import EpisodeService from "../../shared/services/episode";

import List from "../../components/list/List";
import Button from "../../components/buttons/button/Button";
import FormSearch from "../../components/form-search/FormSearch";
import CardInfo from "../../components/cards/card-info/CardInfo";

function Episode() {
  const [episode, setEpisode] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

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

  return (
    <main>
      <FormSearch submit={(search) => submit(search)} />
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

            <Button>Visualize</Button>
          </CardInfo>
        ))}
      </List>
    </main>
  );
}

export default Episode;
