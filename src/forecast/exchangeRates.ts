import Module from "./module";

type ExchangeRateRecord = {
  currency: string,
  rate: number
}

class ExchangeRates extends Module {
  async list() {
    return this.forecast.fetch<ExchangeRateRecord[]>('/exchange_rates')
  }
}

export default ExchangeRates
