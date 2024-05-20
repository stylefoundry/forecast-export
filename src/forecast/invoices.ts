import Module from "./module";

type InvoiceRecord = {
  currency: string,
  rate: number
}

class Invoices extends Module {
  async list() {
    return this.forecast.fetch<InvoiceRecord[]>('/invoices')
  }
}

export default Invoices
