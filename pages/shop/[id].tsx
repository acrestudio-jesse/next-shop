import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";

const ShopItem = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Navbar />
      <h1>Shop Item: {id}</h1>
    </>
  );
};

export default ShopItem;
