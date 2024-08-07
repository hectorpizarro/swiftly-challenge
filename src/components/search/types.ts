import { API_TYPE_NAMES } from "../../constants";

type FormValues = {
  search: string;
  searchType: API_TYPE_NAMES;
};

type SearchErrorsProps = {
  errors: {
    search?: string;
    searchType?: string;
  };
};

type SearchProps = {
  updateSearch: (searchTerm: string, searchTypeId: API_TYPE_NAMES) => void;
};

export type { FormValues, SearchErrorsProps, SearchProps };
