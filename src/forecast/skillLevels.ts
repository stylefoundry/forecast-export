import Module from "./module";

type SkillLevelRecord = {
  id: number;
  level: number;
  description: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class SkillLevels extends Module {
  async list() {
    return this.forecast.fetch<SkillLevelRecord[]>('/skill_levels')
  }
}

export default SkillLevels
