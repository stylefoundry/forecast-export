import Module from "./module";

type BillFromRecord = {
  id: number;
  name: string;
  integration: string;
  external_id: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};

class BillFroms extends Module {
  async list() {
    return this.forecast.fetch<BillFromRecord[]>('/bill_froms')
  }
}

export default BillFroms;
