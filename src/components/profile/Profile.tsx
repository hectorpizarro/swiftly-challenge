import ProfileRow from "./ProfileRow";
import { ProfileProps } from "./types";

// Component renders a card containing a profile. Contents vary depending of the search type defined
const Profile = ({ name, homeworld, species, searchTypeId }: ProfileProps) => {
  return (
    <article className="border border-solid p-4 rounded shadow-md">
      <ul>
        {/* All cards show name */}
        <ProfileRow fieldName="name" fieldValue={name} />

        {/* Homeworld name only for 'name' or 'homeworld' search types */}
        {["name", "species"].includes(searchTypeId) ? (
          <ProfileRow fieldName="homeworld" fieldValue={homeworld} />
        ) : null}

        {/* Species only for 'name' search type */}
        {searchTypeId === "name" ? (
          <ProfileRow fieldName="species" fieldValue={species} />
        ) : null}
      </ul>
    </article>
  );
};

export default Profile;
