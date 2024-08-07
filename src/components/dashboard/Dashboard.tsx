import Profile from "../profile/Profile";
import { DashboardProps } from "./types";

const Dashboard = (props: DashboardProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      <Profile name="Grr" homeworld="Wookie Planet" species="wookie" />
      <Profile name="Bbb" homeworld="B Planet" species="Blet" />
      <Profile name="Bbb" homeworld="B Planet" species="Blet" />
      <Profile name="Bbb" homeworld="B Planet" species="Blet" />
      <Profile name="Bbb" homeworld="B Planet" species="Blet" />
      <Profile name="Bbb" homeworld="B Planet" species="Blet" />
      <Profile name="Bbb" homeworld="B Planet" species="Blet" />
      <Profile
        name="Bbb"
        homeworld="as asd asdf asdfasd fasdf asdf asdf asdf asdf "
        species="Blet"
      />
      <Profile
        name="Bbb"
        homeworld="B Planet"
        species="as dfasdfasdfa sdfa sdfa sdfa sdfa sdfa sdfa sdfasd"
      />
    </div>
  );
};

export default Dashboard;
