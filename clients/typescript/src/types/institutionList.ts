import { Institution } from "./institution";

export interface InstitutionList {
    hasReachedMaximumListSize: boolean | null;
    institution: Institution[];
}