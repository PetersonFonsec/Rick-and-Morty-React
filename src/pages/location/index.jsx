import { useEffect, useState } from "react";

import LocationService from "../../shared/services/location";

import List from "../../components/list/List";
import Button from "../../components/buttons/button/Button";
import CardInfo from "../../components/cards/card-info/CardInfo";

function Location() {
  const [location, setLocation] = useState([]);
  const [loading, setloading] = useState(false);

  const emptyList = (nameLlocation) => (
    <span>
      Nenhum episodio encotrado com o termo <br />
      <strong>{nameLlocation}</strong>
    </span>
  );

  useEffect(() => {
    setloading(true);

    LocationService.getAll()
      .then(({ data }) => {
        console.log(data);
        setLocation(data.results);
      })
      .finally(() => setloading(false));
  }, []);

  return (
    <List loading={loading} emptyList={emptyList("xablau")}>
      {location.map(({ name, type, dimension }, i) => (
        <CardInfo key={i}>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Type:</strong> {type}
          </p>
          <p>
            <strong>Dimension:</strong> {dimension}
          </p>
          <Button>Visualize</Button>
        </CardInfo>
      ))}
    </List>
  );
}

export default Location;
