import { API_TYPE, API_TYPE_NAMES, URL_API_BASE } from "../../constants";
import { APIPeopleResult } from "./types";

// Query function used for Search query
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

// Selector function used with querySearch results
const querySelect = ({ results }: { results: APIPeopleResult[] }) => {
  return results.map((item: APIPeopleResult) => ({
    name: item.name,
    homeworld: item.homeworld,
    species: item.species?.length > 0 ? item.species[0] : "",
  }));
};

// Query function used to obtain information for a querySearch item field. A.e. a Person profile returns a 'homeworld' field containing a query url, we need to do a new query to get the hoeworld name.
const queryField = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  return await response.json();
};

// Selector function used with queryField if field is 'homeworld'
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

// Selector function used with queryField if field is 'species'
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
