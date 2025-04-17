import { Tpt } from "./tpt";
import { VersionType } from "./versionType";
export interface TptSelectFieldsResponse {
    tpt: Tpt;
    version1: VersionType;
    messageId: string;
}
