import { WireBfcFields } from "./wireBfcFields";
import { VersionType } from "./versionType";
export interface WireBfcSelectableFields {
    includeAllWireBfcFields: boolean | null;
    wireBfcFields: WireBfcFields;
    version1: VersionType;
}
