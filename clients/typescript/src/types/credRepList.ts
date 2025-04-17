import { CredRep } from "./credRep";

export interface CredRepList {
    hasReachedMaximumListSize: boolean | null;
    credRep: CredRep[];
}