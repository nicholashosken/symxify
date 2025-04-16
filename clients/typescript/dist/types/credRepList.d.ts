import { CredRep } from "./credRep";
export interface CredRepList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    credRep: CredRep[];
    credRepSpecified: boolean;
}
