import { Form } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function FormSearch({ submit }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event?.preventDefault();
    submit(search);
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        name="search"
        placeholder="Procure o personagem"
      />
      <FontAwesomeIcon icon={faSearch} />
    </Form>
  );
}

export default FormSearch;
