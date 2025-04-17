import { Name } from "./name";
import { VersionType } from "./versionType";

export interface NamePagedListSelectFieldsResponse {
    name: Name[];
    token: string;
    version1: VersionType;
    messageId: string;
}