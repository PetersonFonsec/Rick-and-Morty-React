import { useEffect, useState } from "react";

import EpisodeService from "../../shared/services/episode";

import List from "../../components/list/List";
import Button from "../../components/buttons/button/Button";
import CardInfo from "../../components/cards/card-info/CardInfo";

function Episode() {
  const [episode, setEpisode] = useState([]);
  const [loading, setloading] = useState(false);

  const emptyList = (nameEpisode) => (
    <span>
      Nenhum episodio encotrado com o termo <br />
      <strong>{nameEpisode}</strong>
    </span>
  );

  useEffect(() => {
    setloading(true);

    EpisodeService.getAll()
      .then(({ data }) => {
        console.log(data);
        setEpisode(data.results);
      })
      .finally(() => setloading(false));
  }, []);

  return (
    <List loading={loading} emptyList={emptyList("xablau")}>
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
  );
}

export default Episode;
