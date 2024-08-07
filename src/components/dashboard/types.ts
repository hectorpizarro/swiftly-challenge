import { API_TYPE_NAMES } from "../../constants";

type DashboardProps = {
  searchTerm: string;
  searchTypeId: API_TYPE_NAMES;
};

type PeopleResult = {
  name: string;
  homeworld: string;
  species: string;
};

type APIPeopleResult = {
  name: string;
  homeworld: string;
  species: string[];
};

export type { APIPeopleResult, DashboardProps, PeopleResult };
