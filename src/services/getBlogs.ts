import sanityClient from "../client";

export const getBlogs = () => {
    return sanityClient.fetch(
        `*[_type == "post"]{
            _id,
                      title,
                      slug, 
                      mainImage{
                      asset->{
                      url
                    }
                }
          }    
      `
    );
};
