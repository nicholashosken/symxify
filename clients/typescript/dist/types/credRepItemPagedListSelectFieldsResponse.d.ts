import { CredRepItem } from "./credRepItem";
import { VersionType } from "./versionType";
export interface CredRepItemPagedListSelectFieldsResponse {
    credRepItem: CredRepItem[];
    token: string;
    version1: VersionType;
    messageId: string;
}
