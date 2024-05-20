import Module from "./module";

type SkillRecord = {
  id: number;
  name: string;
  categoryId: number;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class Skills extends Module {
  async list() {
    return this.forecast.fetch<SkillRecord[]>('/skills')
  }
}

export default Skills
