import React, { useState, useEffect } from "react";
import { useGallery } from "../../hooks/useGallery";
import "./gallery.css";
const Gallery = () => {
    const [galleryImages, setGalleryImages] = useGallery();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    useEffect(() => {
        isModalOpen
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "");
    }, [isModalOpen]);
    return (
        <section className="px-5 md:px-8 lg:px-12 relative overflow-hidden">
            <h2 className="h2-title">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-4 lg:gap-6">
                {galleryImages.map((item) => (
                    <div
                        key={item.mainImage?.asset._id}
                        className="w-full h-[200px] md:h-[full] gallery-img lg:h-[400px] lg:col-start-auto cursor-pointer md:hover:scale-105 duration-300"
                    >
                        <img
                            src={item.mainImage?.asset.url}
                            alt={item.title}
                            onClick={() => {
                                setModalImage(item.mainImage.asset.url);
                                handleModal();
                            }}
                            className="w-full h-full object-fill rounded-[10px] md:rounded-[20px] lg:rounded-[40px] md:object-cover"
                        />
                    </div>
                ))}
                {isModalOpen && (
                    <div
                        className="w-screen h-screen bg-modalBlack fixed top-0 right-0 z-50 flex items-center justify-center"
                        onClick={handleModal}
                    >
                        <img
                            src={modalImage}
                            alt=""
                            className="w-[80%] md:w-auto md:h-[60%] lg:h-[70%] modal-animation opacity-0"
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
