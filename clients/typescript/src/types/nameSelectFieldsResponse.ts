import { Name } from "./name";
import { VersionType } from "./versionType";

export interface NameSelectFieldsResponse {
    name: Name;
    version1: VersionType;
    messageId: string;
}