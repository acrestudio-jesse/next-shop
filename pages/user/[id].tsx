import { NextPage } from "next";
import Navbar from "../../components/Navbar";

const UserProfile: NextPage = () => {
  return (
    <>
      <Navbar />
      <h1>Welcome, User!</h1>
    </>
  );
};

export default UserProfile;
