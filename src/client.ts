import SanityClient from "@sanity/client";

const client = SanityClient({
    projectId: "rcmmd25u",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-08-31",
});

export default client;
