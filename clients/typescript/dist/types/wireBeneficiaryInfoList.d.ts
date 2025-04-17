import { WireBeneficiaryInfo } from "./wireBeneficiaryInfo";
export interface WireBeneficiaryInfoList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    wireBeneficiaryInfo: WireBeneficiaryInfo[];
    wireBeneficiaryInfoSpecified: boolean;
}
