import * as path from "path"

const FORECAST_API_URL = "https://api.forecast.it/api"
const FORECAST_API_KEY = process.env.FORECAST_API_KEY

if(!FORECAST_API_KEY) {
  throw new Error("FORECAST_API_KEY is not set")
}

const EXPORT_PATH = path.join(__dirname, "../exports")

export {
  FORECAST_API_URL,
  FORECAST_API_KEY,
  EXPORT_PATH,
}
