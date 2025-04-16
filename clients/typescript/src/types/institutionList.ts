import { Institution } from "./institution";

export interface InstitutionList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    institution: Institution[];
    institutionSpecified: boolean;
}