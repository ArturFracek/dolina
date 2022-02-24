import mocks from "./mocks";

export function fetchAllLines() {
  return Promise.resolve(mocks.map((line) => line));
}

export function fetchLineById(lineId) {
  let line = mocks.find((line) => line.id === lineId);
  return Promise.resolve(line);
}
