import Module from "./module";

type SkillCategoryRecord = {
  id: number;
  name: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class SkillCategories extends Module {
  async list() {
    return this.forecast.fetch<SkillCategoryRecord[]>('/skill_categories')
  }
}

export default SkillCategories
