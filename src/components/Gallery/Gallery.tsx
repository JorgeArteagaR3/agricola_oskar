import { useGallery } from "../../hooks/useGallery";
import "./gallery.css";
const Gallery = () => {
    const [galleryImages, setGalleryImages] = useGallery();
    return (
        <section className="px-5 md:px-8 lg:px-12">
            <h2 className="h2-title">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-4 lg:gap-6">
                {galleryImages.map((item) => (
                    <div className="w-full h-[200px] md:h-[full] gallery-img lg:h-[400px] lg:col-start-auto ">
                        <img
                            key={item.mainImage?.asset._id}
                            src={item.mainImage?.asset.url}
                            alt={item.title}
                            className="w-full h-full object-fill rounded-[10px] md:object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
