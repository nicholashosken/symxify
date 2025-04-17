import { ExcpAddenda } from "./excpAddenda";
export interface ExcpAddendaList {
    hasReachedMaximumListSize: boolean | null;
    excpAddenda: ExcpAddenda[];
}
