import { API_TYPE, API_TYPE_NAMES, URL_API_BASE } from "../../constants";
import { APIPeopleResult } from "./types";

const querySearch = async (
  searchTerm: string,
  searchTypeId: API_TYPE_NAMES
) => {
  const URL_API = `${URL_API_BASE}${API_TYPE[searchTypeId]}?search=${searchTerm}`;
  const response = await fetch(URL_API);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return await response.json();
};

const querySelect = ({ results }: { results: APIPeopleResult[] }) => {
  return results.map((item: APIPeopleResult) => ({
    name: item.name,
    homeworld: item.homeworld,
    species: item.species.length > 0 ? item.species[0] : "",
  }));
};

const queryField = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  return await response.json();
};

const querySelectHomeworld = ({
  url,
  name,
}: {
  url: string;
  name: string;
}) => ({
  url,
  name,
});

const querySelectSpecies = ({ url, name }: { url: string; name: string }) => ({
  url,
  name,
});

export {
  querySearch,
  querySelect,
  queryField,
  querySelectHomeworld,
  querySelectSpecies,
};
