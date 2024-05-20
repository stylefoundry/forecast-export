import Module from "./module";

type LabelCategoryRecord = {
  id: number;
  name: string;
  allowOnTasks: boolean;
  allowOnProjects: boolean;
  allowOnPeople: boolean;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class LabelCategories extends Module {
  async list() {
    return this.forecast.fetch<LabelCategoryRecord[]>('/label_categories')
  }
}

export default LabelCategories
