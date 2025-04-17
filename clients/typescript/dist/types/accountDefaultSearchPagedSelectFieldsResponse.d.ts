import { AccountDefault } from "./accountDefault";
import { VersionType } from "./versionType";
export interface AccountDefaultSearchPagedSelectFieldsResponse {
    accountDefault: AccountDefault[];
    token: string;
    version1: VersionType;
    messageId: string;
}
