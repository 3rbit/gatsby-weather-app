export type WeatherMaps = {
  version: string; // API version
  generated: number; // seconds since epoch (UTC)
  host: string; // Host and protocol for the images
  radar: Radar;
  satellite: Satellite;
};
type Radar = {
  past: Array<Frame>; // Past weather radar frames. 2 hours, with 10-minute steps
  nowcast: Array<Frame>; // Future weather radar frames 30 mins
};
type Satellite = {
  infrared: Array<Frame>; // Past 2 hours of the infrared statellite data 

};
type Frame = {
  time: number; // map frame generation data in seconds since epoch
  path: string; // base path for the images of that frame
};
