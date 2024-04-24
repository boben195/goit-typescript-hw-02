import css from "../ImageCard/ImageCard.module.css";


export interface ImageProp {
  image: {
    id: string;
    urls: {
      small: string,
      regular: string
    }
    slug: string
  }
  openModal: (url: string) => void
}

const ImageCard: React.FC<ImageProp> = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image.urls.regular);
  };
  return (
    <div>
      <div>
        <img
          onClick={handleClick}
          className={css.img}
          src={image.urls.small}
          alt={image.slug}
        />
        <p className={css.text}>Here can be your comercial</p>
      </div>
    </div>
  );
};

export default ImageCard;
