import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";


import { Toaster } from "react-hot-toast";
//import components(look up)************************************
import "./App.css";
import { useEffect, useState } from "react";
import { ImageProp } from "./ImageCard/ImageCard";
 import Modal from "react-modal";
 Modal.setAppElement("#root");

import { requestImages } from "../services/api";

const App: React.FC = () => {
  //**/**************************************** 3 first state*/ */
  const [images, setImages] = useState<ImageProp>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  /**********************************************3 first state */

  /*state for pages **********************/
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  /*state for button "loadmore**********" */
  const [loadBtn, setLoadBtn] = useState<boolean>(false);

  /*state for modal */
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImg, setSelectedImg] = useState<string>("");

  function openModal(data: string) {
    setIsOpen(true);
    setSelectedImg(data);
  }
  function closeModal() {
    setIsOpen(false);
  }

  /*Function for FORM*/
  const handleSearch = (query: string) => {
    setImages([]);
    setQuery(query);
    setPage(1);
  };
  /*Function for FORM*/
  /*Function add page */
  const handleLoad = () => {
    setPage(page + 1);
  };
  /*Function add page */

  /*add modal */

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const { data }: {data: ImageProp[]} = await requestImages(query, page);

        setImages((prevImg) => [...prevImg, ...data]);
        setLoadBtn(page >= 1);
        
      } catch (err) {
        setIsError(true);
        setLoadBtn(false);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  

  return (
    <>
      <h1>HERE WE ARE</h1>
      <SearchBar onAdd={handleSearch} />
      <ImageGallery openModal={openModal} images={images} />
      {loadBtn && images.length > 0 && <LoadMoreBtn handleLoad={handleLoad} />}
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <ImageModal
        info={selectedImg}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
      <Toaster />
    </>
  );
}

export default App;
