import { Name } from "./name";
import { VersionType } from "./versionType";
export interface NameSearchPagedSelectFieldsResponse {
    name: Name[];
    token: string;
    version1: VersionType;
    messageId: string;
}
