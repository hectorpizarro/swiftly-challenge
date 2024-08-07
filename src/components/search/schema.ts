import * as Yup from "yup";
import { FormValues } from "./types";

// Search form initial values
const initialValues: FormValues = {
  search: "",
  searchType: "name",
};

// Using Yup for validation. Schema is provided to Formik form.
const validationSchema = Yup.object().shape({
  search: Yup.string()
    .trim() // Remove whitespace from beginning and end of string
    .matches(
      /^[a-zA-Z0-9\s]+$/,
      "Search term must contain only letters, numbers and spaces"
    )
    .min(1, "Search term is too short!")
    .max(10, "Search term is too Long!")
    .required("Search term is required"),
  searchType: Yup.string()
    .oneOf(["name", "homeworld", "species"])
    .required("Search type is required"),
});

export { initialValues, validationSchema };
