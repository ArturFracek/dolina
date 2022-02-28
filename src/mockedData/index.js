import { stuffingProduction } from "./mocks";

export function fetchAllLines() {
  return Promise.resolve(stuffingProduction.map((line) => line));
}

export function fetchLineById(lineId) {
  let line = stuffingProduction.find((line) => line.id === lineId);
  return Promise.resolve(line);
}
