// used to define types to avoid typescript errors
// types/carousel.ts

export interface Slides {
    tag: string;
    img: string;
    title: string;
    text: string;
    href: string;
    alt?: string;
    cta: string;
}