import { useGallery } from "../../hooks/useGallery";
const Gallery = () => {
    const [galleryImages, setGalleryImages] = useGallery();
    return (
        <section className="px-5 md:px-8 lg:px-12 mb-2">
            <h2 className="text-primary font-bold text-lg md:text-2xl mt-[20px] lg:text-4xl mx-auto text-center">
                Gallery
            </h2>
            <div className="grid grid-cols-2 gap-3">
                {galleryImages.map((item) => (
                    <div className="w-full h-[200px]">
                        <img
                            key={item.mainImage?.asset._id}
                            src={item.mainImage?.asset.url}
                            alt={item.title}
                            className="w-full h-full object-fill rounded-[10px]"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
