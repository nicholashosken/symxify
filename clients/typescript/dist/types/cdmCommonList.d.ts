import { CdmCommon } from "./cdmCommon";
export interface CdmCommonList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    cdmCommon: CdmCommon[];
    cdmCommonSpecified: boolean;
}
