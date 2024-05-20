import Module from "./module";

type ProfileRecord = {
  id: number,
  name: string,
  can_be_edited: boolean,
  person_count: number,
  profile_permission: string[],
}

class Profiles extends Module {
  async list() {
    return this.forecast.fetch<ProfileRecord[]>('/profiles')
  }
}

export default Profiles
