import { WireBeneficiaryFiAdvFields } from "./wireBeneficiaryFiAdvFields";
import { VersionType } from "./versionType";

export interface WireBeneficiaryFiAdvSelectableFields {
    includeAllWireBeneficiaryFiAdvFields: boolean | null;
    wireBeneficiaryFiAdvFields: WireBeneficiaryFiAdvFields;
    version1: VersionType;
}