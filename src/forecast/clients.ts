import Module from "./module";

type ClientRecord = {
  id: number;
  name: string;
  street: string;
  zip: string;
  city: string;
  country: string;
  vat_number: string | null;
  notes: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};

class Clients extends Module {
  async list() {
    return this.forecast.fetch<ClientRecord[]>('/clients')
  }

  async get(clientId: string | number) {
    return this.forecast.fetch<ClientRecord>(`/clients/${clientId}`)
  }
}

export default Clients
