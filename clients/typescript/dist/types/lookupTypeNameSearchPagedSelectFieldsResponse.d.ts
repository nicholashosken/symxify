import { LookupTypeName } from "./lookupTypeName";
import { VersionType } from "./versionType";
export interface LookupTypeNameSearchPagedSelectFieldsResponse {
    lookupTypeName: LookupTypeName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
