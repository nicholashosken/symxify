import { Lookup } from "./lookup";
import { VersionType } from "./versionType";
export interface LookupSearchPagedSelectFieldsResponse {
    lookup: Lookup[];
    token: string;
    version1: VersionType;
    messageId: string;
}
