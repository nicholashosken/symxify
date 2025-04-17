import { Lookup } from "./lookup";
import { VersionType } from "./versionType";

export interface LookupPagedListSelectFieldsResponse {
    lookup: Lookup[];
    token: string;
    version1: VersionType;
    messageId: string;
}