import { Lookup } from "./lookup";
import { VersionType } from "./versionType";
export interface LookupSelectFieldsResponse {
    lookup: Lookup;
    version1: VersionType;
    messageId: string;
}
