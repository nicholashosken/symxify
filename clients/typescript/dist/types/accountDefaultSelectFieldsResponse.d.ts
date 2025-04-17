import { AccountDefault } from "./accountDefault";
import { VersionType } from "./versionType";
export interface AccountDefaultSelectFieldsResponse {
    accountDefault: AccountDefault;
    version1: VersionType;
    messageId: string;
}
