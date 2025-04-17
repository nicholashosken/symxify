import { Eft } from "./eft";
import { VersionType } from "./versionType";
export interface EftSelectFieldsResponse {
    eft: Eft;
    version1: VersionType;
    messageId: string;
}
