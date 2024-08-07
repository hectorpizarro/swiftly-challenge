type Props = {};

const Search = (props: Props) => {
  return (
    <search className="my-4">
      <form>
        <fieldset className="flex flex-col md:flex-row gap-x-0 md:gap-x-6 gap-y-2 md:gap-y-0">
          <section className="items-center flex gap-2">
            <label className="w-14" htmlFor="search">
              Search:
            </label>
            <input
              className="border p-2 rounded shadow w-48"
              id="search"
              name="search"
              type="search"
            />
          </section>
          <section className="items-center flex gap-2">
            <label className="w-14" htmlFor="searchType">
              Type:
            </label>
            <select className="border p-2 rounded shadow w-48">
              <option value=""></option>
              <option value="name">Name</option>
              <option value="homeworld">Homeworld</option>
              <option value="species">Species</option>
            </select>
          </section>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-64 md:w-fit"
            type="submit"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </search>
  );
};

export default Search;
