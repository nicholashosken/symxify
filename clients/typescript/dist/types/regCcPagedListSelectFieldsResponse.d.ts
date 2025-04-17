import { RegCc } from "./regCc";
import { VersionType } from "./versionType";
export interface RegCcPagedListSelectFieldsResponse {
    regCc: RegCc[];
    token: string;
    version1: VersionType;
    messageId: string;
}
