import { Document } from "@contentful/rich-text-types";
import { ImageLink } from "@/types/base";

export type BlogPost = {
    title: string;
    publishedDate: string;
    featuredImage: ImageLink;
    content: Document;
    tags: string[];
};