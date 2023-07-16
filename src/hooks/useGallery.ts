import { useState, useEffect } from "react";
import sanityClient from "../client";

export const useGallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");
    const [galleryImages, setGalleryImages] = useState<Record<string, any>[]>(
        []
    );
    const viewWidth = document.documentElement.clientWidth;
    const sortedImages = [...galleryImages].sort(
        (a: Record<string, any>, b: Record<string, any>) => {
            const dateA = a._createdAt;
            const dateB = b._createdAt;
            return new Date(dateA).getTime() - new Date(dateB).getTime();
        }
    );
    if (viewWidth < 768) {
        sortedImages.pop();
    }
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "gallery"]{
                _createdAt,
                title, 
                mainImage{
                asset->{
                url,
                _id
                    }
                }
              }`
            )
            .then((data) => {
                setGalleryImages(data);
            });
    }, []);

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const openModal = (url: string) => {
        setModalImage(url);
        handleModal();
    };

    useEffect(() => {
        isModalOpen
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "");
    }, [isModalOpen]);

    return { sortedImages, handleModal, openModal, isModalOpen, modalImage };
};
