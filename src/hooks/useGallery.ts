import { useState, useEffect } from "react";
import sanityClient from "../client";

export const useGallery = () => {
    const [galleryItem, setGalleryItem] = useState<Record<string, any>[]>([]);
    const viewWidth = document.documentElement.clientWidth;
    const sortedArr = [...galleryItem].sort(
        (a: Record<string, any>, b: Record<string, any>) => {
            const dateA = a._createdAt;
            const dateB = b._createdAt;
            return new Date(dateA).getTime() - new Date(dateB).getTime();
        }
    );
    if (viewWidth < 768) {
        sortedArr.pop();
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
                setGalleryItem(data);
            });
    }, []);
    return [sortedArr, setGalleryItem] as const;
};
