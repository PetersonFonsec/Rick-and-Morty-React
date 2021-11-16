import { BaseService } from "./base";

class EpisodeService extends BaseService {
  constructor() {
    super("/episode");
  }
}

export default new EpisodeService();
