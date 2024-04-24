
interface Prop {
   handleLoad: () => void
}

const LoadMoreBtn: React.FC<Prop> = ({ handleLoad }) => {
  return (
    <button type="button" onClick={handleLoad}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
