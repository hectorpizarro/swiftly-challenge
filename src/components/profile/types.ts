import { API_TYPE_NAMES } from "../../constants";

type ProfileProps = {
  name: string;
  homeworld: string;
  species: string;
  searchTypeId: API_TYPE_NAMES;
};

type ProfileRowProps = {
  fieldName: string;
  fieldValue: string;
};

export type { ProfileProps, ProfileRowProps };
