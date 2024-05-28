import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHomePageFields {
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

export type TypeHomePageSkeleton = EntrySkeletonType<TypeHomePageFields, "homePage">;
export type TypeHomePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHomePageSkeleton, Modifiers, Locales>;
