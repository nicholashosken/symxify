import { WireMiscFields } from "./wireMiscFields";
import { VersionType } from "./versionType";
export interface WireMiscSelectableFields {
    includeAllWireMiscFields: boolean | null;
    wireMiscFields: WireMiscFields;
    version1: VersionType;
}
