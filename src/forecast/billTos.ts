import Module from "./module";

type BillToRecord = {
  id: number;
  name: string;
  address: string;
  tax_id: string;
  external_id: string;
  bill_from_id: number;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};

class BillTos extends Module {
  async list() {
    return this.forecast.fetch<BillToRecord[]>('/bill_tos')
  }
}

export default BillTos;
