import sanityClient from "../client";

export const getBlogBySlug = async (slug: string) => {
    const res = await sanityClient.fetch(
        `*[_type == "post" && slug.current == '${slug}'][0]{
    title,
    body,
    publishedAt, 
    mainImage{
    asset->{
    url
                }
        }
  }`
    );
    if (!res) throw new Error("Blog Post not found");

    return res;
};

export const getAllBlogs = async () => {
    const res = await sanityClient.fetch(
        `*[_type == "post"]{
    _id,
    title,
    slug,
    mainImage{
    asset->{
    url
                }
        }
  }`
    );
    if (!res) throw new Error("Blogs not found");

    return res;
};
