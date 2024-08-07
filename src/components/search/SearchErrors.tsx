import { SearchErrorsProps } from "./types";

// Error component, rendered under the search fields. You can test it entering "@@@" in the search input field.
const SearchErrors = ({ errors }: SearchErrorsProps) => {
  const errorsList = [];
  if (errors.search) {
    errorsList.push(errors.search);
  }

  if (errors.searchType) {
    errorsList.push(errors.searchType);
  }

  if (errorsList.length === 0) {
    return null;
  }

  return (
    <div className="text-sm text-red-500 my-4">{errorsList.join(" / ")}</div>
  );
};

export default SearchErrors;
