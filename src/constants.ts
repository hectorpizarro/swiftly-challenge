const URL_API_BASE = "https://swapi.dev/api";
const URL_PEOPLE = "/people";
const URL_PLANETS = "/planets";
const URL_SPECIES = "/species";
const API_TYPE = {
  name: URL_PEOPLE,
  homeworld: URL_PLANETS,
  species: URL_SPECIES,
};

// ms time to expire API queries
const STALETIME = 5000;

type API_TYPE_NAMES = keyof typeof API_TYPE;

export {
  API_TYPE,
  STALETIME,
  URL_API_BASE,
  URL_PEOPLE,
  URL_PLANETS,
  URL_SPECIES,
};
export type { API_TYPE_NAMES };
