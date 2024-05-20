import Module from "./module";

type CompanyRecord = {
  city: string;
  contact_email: string;
  contact_name: string;
  contact_phone: string;
  country: string;
  currency: string;
  company_name: string;
  seats: number;
  vat_id: string;
  virtual_seats: number;
  zip: string;
  company_target: number;
}

class Company extends Module{
  async get() {
    return this.forecast.fetch<CompanyRecord>('/company')
  }
}

export default Company
