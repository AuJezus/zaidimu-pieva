import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeGamePageFields {
    title: EntryFieldTypes.Symbol;
    paragraph: EntryFieldTypes.Text;
}

export type TypeGamePageSkeleton = EntrySkeletonType<TypeGamePageFields, "gamePage">;
export type TypeGamePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeGamePageSkeleton, Modifiers, Locales>;
