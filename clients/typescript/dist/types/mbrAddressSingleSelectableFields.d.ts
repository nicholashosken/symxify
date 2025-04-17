import { MbrAddressFields } from "./mbrAddressFields";
import { VersionType } from "./versionType";
export interface MbrAddressSingleSelectableFields {
    includeAllMbrAddressFields: boolean | null;
    mbrAddressFields: MbrAddressFields;
    version1: VersionType;
}
