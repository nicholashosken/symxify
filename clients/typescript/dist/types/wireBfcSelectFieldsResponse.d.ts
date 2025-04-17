import { WireBfc } from "./wireBfc";
import { VersionType } from "./versionType";
export interface WireBfcSelectFieldsResponse {
    wireBfc: WireBfc;
    version1: VersionType;
    messageId: string;
}
