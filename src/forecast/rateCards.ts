import Module from "./module";

type RateCardRecord = {
  id: number;
  name: string;
  default_rate: number;
  currency: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

type RateCardRateRecord = {
  role: number;
  rate: number;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

type VersionedRateCardRecord = {
  start_date: string | null;
  end_date: string;
  default_rate: number;
  rates: {
    role: number;
    rate: number;
    created_by: number;
    updated_by: number;
    created_at: string;
    updated_at: string;
  }[];
}

class RateCards extends Module {
  async list() {
    return this.forecast.fetch<RateCardRecord[]>('/rate_cards')
  }

  async rates(rateCardId: string | number) {
    return this.forecast.fetch<RateCardRateRecord[]>(`/rate_cards/${rateCardId}/rates`)
  }

  async versions(rateCardId: string | number) {
    return this.forecast.fetch<VersionedRateCardRecord[]>(`/rate_cards/${rateCardId}/versions`)
  }
}

export default RateCards
