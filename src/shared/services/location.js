import { BaseService } from "./base";

class LocationService extends BaseService {
  constructor() {
    super("/location");
  }
}

export default new LocationService();
