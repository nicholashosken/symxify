import { ShareFieldName } from "./shareFieldName";
import { VersionType } from "./versionType";

export interface ShareFieldNamePagedListSelectFieldsResponse {
    shareFieldName: ShareFieldName[];
    token: string;
    version1: VersionType;
    messageId: string;
}