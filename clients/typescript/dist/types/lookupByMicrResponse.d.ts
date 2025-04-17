import { LookupResult } from "./lookupResult";
import { VersionType } from "./versionType";
export interface LookupByMicrResponse {
    result: LookupResult;
    version1: VersionType;
    messageId: string;
}
