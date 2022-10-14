import Navbar from "../../../components/Navbar";
import { useRouter } from "next/router";
import { NextPage } from "next";


const OneIllustration: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Navbar />
      <h1>Illustration: {id}</h1>
    </>
  );
};

export default OneIllustration;
