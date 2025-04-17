import { Misc } from "./misc";
import { VersionType } from "./versionType";
export interface MiscSelectFieldsResponse {
    misc: Misc;
    version1: VersionType;
    messageId: string;
}
