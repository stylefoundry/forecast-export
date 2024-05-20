import Module from "./module";

type PlaceholderRecord = {
  id: number;
  name: string;
  role_id: number;
  project_id: number;
  department_id: number;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class Placeholders extends Module {
  async list() {
    return this.forecast.fetch<PlaceholderRecord[]>('/placeholders')
  }
}

export default Placeholders
