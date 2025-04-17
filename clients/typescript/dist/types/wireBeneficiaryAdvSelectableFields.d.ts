import { WireBeneficiaryAdvFields } from "./wireBeneficiaryAdvFields";
import { VersionType } from "./versionType";
export interface WireBeneficiaryAdvSelectableFields {
    includeAllWireBeneficiaryAdvFields: boolean | null;
    wireBeneficiaryAdvFields: WireBeneficiaryAdvFields;
    version1: VersionType;
}
