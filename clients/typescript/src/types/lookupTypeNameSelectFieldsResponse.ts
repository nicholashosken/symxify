import { LookupTypeName } from "./lookupTypeName";
import { VersionType } from "./versionType";

export interface LookupTypeNameSelectFieldsResponse {
    lookupTypeName: LookupTypeName;
    version1: VersionType;
    messageId: string;
}