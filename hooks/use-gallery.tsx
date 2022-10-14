import { useState, useEffect } from "react";


//takes a string that is the end point within API
const useGallery = (galleryName: string) => {
  const [gallery, setGallery] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/images/${galleryName}`)
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
      });
    setIsLoading(false);
  }, []);

  return { gallery, isLoading };
};

export default useGallery;
