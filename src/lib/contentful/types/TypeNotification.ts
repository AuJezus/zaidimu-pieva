import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNotificationFields {
    title: EntryFieldTypes.Symbol<"Pranešimas">;
    message?: EntryFieldTypes.RichText;
}

export type TypeNotificationSkeleton = EntrySkeletonType<TypeNotificationFields, "notification">;
export type TypeNotification<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNotificationSkeleton, Modifiers, Locales>;
