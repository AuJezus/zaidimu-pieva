import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTestimonialFields {
    personsName: EntryFieldTypes.Symbol;
    comment: EntryFieldTypes.Text;
    image?: EntryFieldTypes.AssetLink;
}

export type TypeTestimonialSkeleton = EntrySkeletonType<TypeTestimonialFields, "testimonial">;
export type TypeTestimonial<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTestimonialSkeleton, Modifiers, Locales>;
