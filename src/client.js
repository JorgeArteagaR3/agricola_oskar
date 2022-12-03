import SanityClient from "@sanity/client";

const client = SanityClient({
    projectId: "rcmmd25u",
    dataset: "production",
    useCdn: true,
});

export default client;
