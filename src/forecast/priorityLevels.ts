import Module from "./module";

type PriorityLevelRecord = {
  id: number;
  name: string;
  weight: number;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by: number;
  use_count: number;
  disabled: boolean;
}

class PriorityLevels extends Module {
  async list() {
    return this.forecast.fetch<PriorityLevelRecord[]>('/priority_levels')
  }
}

export default PriorityLevels
