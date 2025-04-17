import { CdmCommon } from "./cdmCommon";
export interface CdmCommonList {
    hasReachedMaximumListSize: boolean | null;
    cdmCommon: CdmCommon[];
}
