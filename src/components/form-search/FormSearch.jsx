import { Form } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function FormSearch() {
  return (
    <Form>
      <input type="text" name="search" placeholder="Procure o personagem" />
      <FontAwesomeIcon icon={faSearch} />
    </Form>
  );
}

export default FormSearch;
