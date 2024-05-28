import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHero__pageFields {
    heroTitle: EntryFieldTypes.Symbol;
    heroParagraph: EntryFieldTypes.Symbol;
    heroImage: EntryFieldTypes.AssetLink;
    lawnGameTitle: EntryFieldTypes.Symbol;
    lawnGameParagraph1: EntryFieldTypes.Text;
    lawnGameParagraph2?: EntryFieldTypes.Text;
    lawnGameImage: EntryFieldTypes.AssetLink;
    processTitle: EntryFieldTypes.Symbol;
    processNames: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    processDescriptions: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    gameShowcaseTitle: EntryFieldTypes.Symbol;
    gameShowcaseParagraph: EntryFieldTypes.Text;
    eventsTitle: EntryFieldTypes.Symbol;
    eventNames: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    eventImages: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeHero__pageSkeleton = EntrySkeletonType<TypeHero__pageFields, "hero-page">;
export type TypeHero__page<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHero__pageSkeleton, Modifiers, Locales>;