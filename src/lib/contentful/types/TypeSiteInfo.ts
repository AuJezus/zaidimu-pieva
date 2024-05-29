import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSiteInfoFields {
    telefonas: EntryFieldTypes.Symbol;
    email: EntryFieldTypes.Symbol;
    facebookLink: EntryFieldTypes.Symbol;
    instagramLink: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol<"Svetainės Info">;
}

export type TypeSiteInfoSkeleton = EntrySkeletonType<TypeSiteInfoFields, "siteInfo">;
export type TypeSiteInfo<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSiteInfoSkeleton, Modifiers, Locales>;
