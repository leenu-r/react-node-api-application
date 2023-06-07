import { useEffect, useState } from "react";
import Image from "./Image";

const fetchImageList = async () => {
  try {
    const response = await fetch("image-list");
    const imageList = response.json();
    return imageList;
  } catch (error) {
    console.log("Error occured" + error);
    return [];
  }
};

function DisplayImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let ignore = false;
    (async () => {
      if (!ignore) {
        const imagesList = await fetchImageList();
        imagesList.length > 0 && setImages(imagesList);
      }
    })();
    return () => {
      ignore = true; // cleanup function
    };
  }, []);

  return (
    <div>
      {images.map((image, index) => (
      <Image key={index} image={image}/>
      ))}
    </div>
  );
}
export default DisplayImages;
