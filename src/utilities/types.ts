export type SearchLocation = {
  id: number,
  name: string,
  region: string,
  country: string,
  lat: number,
  lon: number,
}

export type Location = {
  lat: number,
  lon: number,
  name: string,
  region: string,
  country: string,
  tz_id: string,
  localtime_epoch: Int16Array,
  localtime: string,
}

export type Position = {
  lat: number,
  lon: number,
};