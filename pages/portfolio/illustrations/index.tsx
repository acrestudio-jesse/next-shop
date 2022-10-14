import { NextPage } from "next";
import useGallery from '../../../hooks/use-gallery'
import Gallery from "../../../components/Gallery";
import Navbar from "../../../components/Navbar";

const Illustrations: NextPage = () => {
  const {gallery: illustrations, isLoading} = useGallery('illustrations')

  if (isLoading) return <p> Loading...</p>;
  if (!illustrations) return <p>No illustrations found.</p>;

  return (
    <>
      <Navbar />
      <h1>Illustrations</h1>
      <Gallery displayImages={illustrations} imagePath='/portfolio/illustrations' />
    </>
  );
};

export default Illustrations;
