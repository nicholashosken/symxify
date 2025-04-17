import { AccountFieldName } from "./accountFieldName";
import { VersionType } from "./versionType";

export interface AccountFieldNameSearchPagedSelectFieldsResponse {
    accountFieldName: AccountFieldName[];
    token: string;
    version1: VersionType;
    messageId: string;
}