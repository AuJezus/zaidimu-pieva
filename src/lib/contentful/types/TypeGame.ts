import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeGameFields {
    name: EntryFieldTypes.Symbol;
    addedAt: EntryFieldTypes.Date;
    description: EntryFieldTypes.Text;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    image: EntryFieldTypes.AssetLink;
    availability?: EntryFieldTypes.Date;
    longDescription?: EntryFieldTypes.RichText;
    slug: EntryFieldTypes.Symbol;
    bookedFrom?: EntryFieldTypes.Date;
    bookedUntil?: EntryFieldTypes.Date;
}

export type TypeGameSkeleton = EntrySkeletonType<TypeGameFields, "game">;
export type TypeGame<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeGameSkeleton, Modifiers, Locales>;
