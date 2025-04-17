import { ShareFieldName } from "./shareFieldName";
import { VersionType } from "./versionType";

export interface ShareFieldNameSelectFieldsResponse {
    shareFieldName: ShareFieldName;
    version1: VersionType;
    messageId: string;
}