import Module from "./module";

type CompanyContactRecord = {
  id: number;
  person_id: number;
  contact_type: string;
}

class CompanyContacts extends Module {
  async list() {
    return this.forecast.fetch<CompanyContactRecord[]>('/company_contact')
  }
}

export default CompanyContacts
