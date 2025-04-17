import { WireBeneficiaryInfoFields } from "./wireBeneficiaryInfoFields";
import { VersionType } from "./versionType";

export interface WireBeneficiaryInfoSelectableFields {
    includeAllWireBeneficiaryInfoFields: boolean | null;
    wireBeneficiaryInfoFields: WireBeneficiaryInfoFields;
    version1: VersionType;
}