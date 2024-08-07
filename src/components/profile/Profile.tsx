// Ensure the profile card displays the person’s name, homeworld name, and species name.
import ProfileRow from "./ProfileRow";
import { ProfileProps } from "./types";

const Profile = ({ name, homeworld, species }: ProfileProps) => {
  return (
    <article className="border border-solid p-4 rounded shadow-md">
      <ul>
        <ProfileRow fieldName="name" fieldValue={name} />
        <ProfileRow fieldName="homeworld" fieldValue={homeworld} />
        <ProfileRow fieldName="species" fieldValue={species} />
      </ul>
    </article>
  );
};

export default Profile;
