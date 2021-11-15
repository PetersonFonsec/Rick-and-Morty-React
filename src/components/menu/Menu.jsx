import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faPlaceOfWorship,
  faImages,
} from "@fortawesome/free-solid-svg-icons";

import { List } from "./style";
import { useRouteMatch } from "react-router";

function Menu() {
  let { isExact: isEpisode = false } = useRouteMatch("/episode") ?? {};
  let { isExact: isLocation = false } = useRouteMatch("/location") ?? {};
  let { isExact: isCharacter = false } = useRouteMatch("/character") ?? {};

  return (
    <nav>
      <List role="menu">
        <li role="menuitem">
          <Link className={isCharacter ? "active" : ""} to="/character">
            <FontAwesomeIcon icon={faUsers} />
          </Link>
        </li>

        <li role="menuitem">
          <Link className={isEpisode ? "active" : ""} to="/episode">
            <FontAwesomeIcon icon={faPlaceOfWorship} />
          </Link>
        </li>

        <li role="menuitem">
          <Link className={isLocation ? "active" : ""} to="/location">
            <FontAwesomeIcon icon={faImages} />
          </Link>
        </li>
      </List>
    </nav>
  );
}

export default Menu;
