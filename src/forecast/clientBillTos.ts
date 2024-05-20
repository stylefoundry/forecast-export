import Module from "./module";

type ClientBillToRecord = {
  id: number;
  client_id: number;
  bill_from_id: number;
  bill_to_id: number;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class ClientBillTos extends Module {
  async list() {
    return this.forecast.fetch<ClientBillToRecord[]>('/client_bill_tos')
  }
}

export default ClientBillTos
