import { WireBfcFields } from "./wireBfcFields";
import { VersionType } from "./versionType";

export interface WireBfcSingleSelectableFields {
    includeAllWireBfcFields: boolean | null;
    wireBfcFields: WireBfcFields;
    version1: VersionType;
}