import { MbrAddressFields } from "./mbrAddressFields";
import { MbrAddressFmHistorySelectableFields } from "./mbrAddressFmHistorySelectableFields";
import { VersionType } from "./versionType";
export interface MbrAddressSelectableFields {
    includeAllMbrAddressFields: boolean | null;
    mbrAddressFields: MbrAddressFields;
    mbrAddressFmHistorySelectableFields: MbrAddressFmHistorySelectableFields;
    version1: VersionType;
}
