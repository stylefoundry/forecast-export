import Module from "./module";

type LabelRecord = {
  id: number;
  name: string;
  color: string;
  categoryId: number;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class Labels extends Module {
  async list() {
    return this.forecast.fetch<LabelRecord[]>('/labels')
  }
}

export default Labels
