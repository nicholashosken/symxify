import { WireMisc } from "./wireMisc";
import { VersionType } from "./versionType";

export interface WireMiscSelectFieldsResponse {
    wireMisc: WireMisc;
    version1: VersionType;
    messageId: string;
}