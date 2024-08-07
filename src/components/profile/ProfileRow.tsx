import { ProfileRowProps } from "./types";

const ProfileRow = ({ fieldName, fieldValue }: ProfileRowProps) => {
  return (
    <li className="flex gap-">
      <span className="capitalize w-24">{fieldName}:</span>
      <span className="flex-auto overflow-hidden text-ellipsis whitespace-nowrap w-36">
        {fieldValue}
      </span>
    </li>
  );
};

export default ProfileRow;
