import { BaseService } from "./base";

class CharacterService extends BaseService {
  constructor() {
    super("/character");
  }
}

export default new CharacterService();
