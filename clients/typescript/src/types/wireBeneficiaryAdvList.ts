import { WireBeneficiaryAdv } from "./wireBeneficiaryAdv";

export interface WireBeneficiaryAdvList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    wireBeneficiaryAdv: WireBeneficiaryAdv[];
    wireBeneficiaryAdvSpecified: boolean;
}