import { WireBeneficiaryInfo } from "./wireBeneficiaryInfo";
export interface WireBeneficiaryInfoList {
    hasReachedMaximumListSize: boolean | null;
    wireBeneficiaryInfo: WireBeneficiaryInfo[];
}
