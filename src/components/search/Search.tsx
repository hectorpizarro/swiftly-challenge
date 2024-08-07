// Using Formik for form handling
import { Field, Form, Formik, FormikHelpers } from "formik";
import { initialValues, validationSchema } from "./schema";
import { FormValues, SearchProps } from "./types";
import SearchErrors from "./SearchErrors";

// Search component
const Search = ({ updateSearch }: SearchProps) => {
  // Executed when Form is submitted. Updates search values in parent state
  const onSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    updateSearch(values.search, values.searchType);
    setSubmitting(false);
  };

  return (
    <search className="my-4">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ errors }) => (
          <Form>
            <fieldset className="flex flex-col md:flex-row gap-x-0 md:gap-x-6 gap-y-2 md:gap-y-0">
              <section className="items-center flex gap-2">
                <label className="w-14" htmlFor="search">
                  Search:
                </label>
                <Field
                  className={`border ${
                    errors.search ? "border-red-500" : ""
                  } p-2 rounded shadow w-48`}
                  id="search"
                  name="search"
                  maxLength={10}
                  type="search"
                />
              </section>
              <section className="items-center flex gap-2">
                <label className="w-14" htmlFor="searchType">
                  Type:
                </label>
                <Field
                  as="select"
                  id="searchType"
                  name="searchType"
                  className={`border ${
                    errors.searchType ? "border-red-500" : ""
                  } p-2 rounded shadow w-48`}
                >
                  <option value="name">Name</option>
                  <option value="homeworld">Homeworld</option>
                  <option value="species">Species</option>
                </Field>
              </section>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-64 md:w-fit"
                type="submit"
              >
                Submit
              </button>
            </fieldset>
            <SearchErrors errors={errors} />
          </Form>
        )}
      </Formik>
    </search>
  );
};

export default Search;
