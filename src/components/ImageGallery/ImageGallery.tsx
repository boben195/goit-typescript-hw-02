import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

import { ImageProp } from "../ImageCard/ImageCard";

interface Prop {
  images: ImageProp[];
  openModal: (url: string) => void
  
}

const ImageGallery: React.FC<Prop> = ({ images, openModal }) => {
  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }
  return (
    <div>
      <ul className={css.list}>
        {images.map((image) => (
          <li className={css.item} key={image.id}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
