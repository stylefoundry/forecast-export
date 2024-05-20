import Module from "./module";

type NonProjectTimeRecord = {
  id: number;
  name: string;
  is_internal_time: boolean;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class NonProjectTimes extends Module {
  async list() {
    return this.forecast.fetch<NonProjectTimeRecord[]>('/non_project_time')
  }
}

export default NonProjectTimes
