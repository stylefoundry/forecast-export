import Module from "./module";

type RoleRecord = {
  id: number;
  name: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class Roles extends Module {
  async list() {
    return this.forecast.fetch<RoleRecord[]>('/roles')
  }
}

export default Roles
