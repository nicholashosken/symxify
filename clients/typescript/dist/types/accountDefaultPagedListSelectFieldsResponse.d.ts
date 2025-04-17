import { AccountDefault } from "./accountDefault";
import { VersionType } from "./versionType";
export interface AccountDefaultPagedListSelectFieldsResponse {
    accountDefault: AccountDefault[];
    token: string;
    version1: VersionType;
    messageId: string;
}
