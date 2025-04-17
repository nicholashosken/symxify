import { LookupTypeName } from "./lookupTypeName";
import { VersionType } from "./versionType";
export interface LookupTypeNamePagedListSelectFieldsResponse {
    lookupTypeName: LookupTypeName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
