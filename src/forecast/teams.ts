import Module from "./module";

type TeamRecord = {
  id: number;
  name: string;
  persons: number[];
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class Teams extends Module {
  async list() {
    return this.forecast.fetch<TeamRecord[]>('/teams')
  }
}

export default Teams
