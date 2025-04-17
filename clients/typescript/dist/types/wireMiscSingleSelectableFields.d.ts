import { WireMiscFields } from "./wireMiscFields";
import { VersionType } from "./versionType";
export interface WireMiscSingleSelectableFields {
    includeAllWireMiscFields: boolean | null;
    wireMiscFields: WireMiscFields;
    version1: VersionType;
}
