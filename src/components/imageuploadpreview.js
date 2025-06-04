import { useState } from "react";

const ImageUploadPreview = () => {
  const [preview, setPreview] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div>
      <input type="file" onChange={handleFile} />
      {preview && <img src={preview} alt="preview" width={200} />}
    </div>
  );
};

export default ImageUploadPreview;
