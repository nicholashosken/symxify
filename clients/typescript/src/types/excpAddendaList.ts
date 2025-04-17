import { ExcpAddenda } from "./excpAddenda";

export interface ExcpAddendaList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    excpAddenda: ExcpAddenda[];
    excpAddendaSpecified: boolean;
}