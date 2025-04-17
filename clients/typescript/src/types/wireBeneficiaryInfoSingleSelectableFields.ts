import { WireBeneficiaryInfoFields } from "./wireBeneficiaryInfoFields";
import { VersionType } from "./versionType";

export interface WireBeneficiaryInfoSingleSelectableFields {
    includeAllWireBeneficiaryInfoFields: boolean | null;
    wireBeneficiaryInfoFields: WireBeneficiaryInfoFields;
    version1: VersionType;
}