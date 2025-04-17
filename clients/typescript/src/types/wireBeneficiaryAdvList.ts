import { WireBeneficiaryAdv } from "./wireBeneficiaryAdv";

export interface WireBeneficiaryAdvList {
    hasReachedMaximumListSize: boolean | null;
    wireBeneficiaryAdv: WireBeneficiaryAdv[];
}