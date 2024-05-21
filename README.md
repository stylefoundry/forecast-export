# Forecast export script

This script exports all available data from [Forecast](https://forecast.app).

## Install

This project requires node JS,

```sh
yarn install
```

OR

```sh
npm install
```

## Config

Create a `.env` file with the following content:
```sh
FORECAST_API_KEY=
```

## Run

Running the `export` script will create a new folder named `exports/[CURRENT DATE]/[CURRENT TIME]` into which multiple JSON files will be created.

```sh
yarn export
```

OR

```sh
npm run export
```
