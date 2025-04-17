import { WireBeneficiaryAdvFields } from "./wireBeneficiaryAdvFields";
import { VersionType } from "./versionType";

export interface WireBeneficiaryAdvSingleSelectableFields {
    includeAllWireBeneficiaryAdvFields: boolean | null;
    wireBeneficiaryAdvFields: WireBeneficiaryAdvFields;
    version1: VersionType;
}