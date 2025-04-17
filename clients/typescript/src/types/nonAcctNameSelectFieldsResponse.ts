import { NonAcctName } from "./nonAcctName";
import { VersionType } from "./versionType";

export interface NonAcctNameSelectFieldsResponse {
    nonAcctName: NonAcctName;
    version1: VersionType;
    messageId: string;
}