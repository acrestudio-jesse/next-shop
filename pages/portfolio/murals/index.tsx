import { NextPage } from "next";
import Gallery from "../../../components/Gallery";
import useGallery from "../../../hooks/use-gallery";
import Navbar from "../../../components/Navbar";

const Murals: NextPage = () => {
  const {gallery: murals, isLoading} = useGallery('murals')

  if (isLoading) return <p> Loading...</p>;
  if (!murals) return <p>No murals found.</p>;

  return (
    <>
      <Navbar />
      <h1>Murals</h1>
      <Gallery displayImages={murals} imagePath='/portfolio/murals' />
    </>
  );
};

export default Murals;
