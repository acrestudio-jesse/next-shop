import { PortfolioDisplay } from "../interfaces";
import Image from "next/image";
import style from "../styles/componentStyles/Gallery.module.css";
import Link from "next/link";

interface imageProps {
  displayImages: Array<PortfolioDisplay>;
  imagePath: string;
}

const Gallery = ({ displayImages, imagePath }: imageProps) => {
  return (
    <>
      <div className={style.galleryGrid}>
        {displayImages.map((img: PortfolioDisplay) => {
          return (
            <Link key={img.id} href={`${imagePath}/${img.id}`}>
              <div className={style.imageContainer}>
                <Image
                  className={style.image}
                  src={img.image}
                  alt={img.alt}
                  layout="fill"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
