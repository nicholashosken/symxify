import { AccountFieldName } from "./accountFieldName";
import { VersionType } from "./versionType";

export interface AccountFieldNamePagedListSelectFieldsResponse {
    accountFieldName: AccountFieldName[];
    token: string;
    version1: VersionType;
    messageId: string;
}