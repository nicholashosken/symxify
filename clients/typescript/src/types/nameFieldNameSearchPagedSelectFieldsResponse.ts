import { NameFieldName } from "./nameFieldName";
import { VersionType } from "./versionType";

export interface NameFieldNameSearchPagedSelectFieldsResponse {
    nameFieldName: NameFieldName[];
    token: string;
    version1: VersionType;
    messageId: string;
}