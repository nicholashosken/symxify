import { IntType } from "./intType";
import { VersionType } from "./versionType";
export interface IntTypePagedListSelectFieldsResponse {
    intType: IntType[];
    token: string;
    version1: VersionType;
    messageId: string;
}
