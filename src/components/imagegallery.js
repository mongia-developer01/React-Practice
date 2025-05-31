import { useState } from "react";

const ImageGallery = ({ images }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <div>
      <img src={main} width={200} />
      <div>
        {images.map((img, i) => (
          <img key={i} src={img} alt="image" width={50} onClick={() => setMain(img)} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
