import { WireBeneficiaryInfoFields_2 } from "./wireBeneficiaryInfoFields_2";

export interface WireBeneficiaryInfoUpdateRequest {
    wireBeneficiaryInfoLocatorValue: number;
    wireBeneficiaryInfoLocatorValueSpecified: boolean;
    wireBeneficiaryInfoLocator: number | null;
    wireBeneficiaryInfoFields: WireBeneficiaryInfoFields_2;
}