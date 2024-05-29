import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeContactPageFields {
    title: EntryFieldTypes.Symbol;
    paragraph: EntryFieldTypes.Text;
}

export type TypeContactPageSkeleton = EntrySkeletonType<TypeContactPageFields, "contactPage">;
export type TypeContactPage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContactPageSkeleton, Modifiers, Locales>;
