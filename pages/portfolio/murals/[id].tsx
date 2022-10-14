import Navbar from "../../../components/Navbar";
import { useRouter } from "next/router";
import { NextPage } from "next";

const OneMural: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Navbar />
      <h1>Mural: {id}</h1>
    </>
  );
};

export default OneMural;
