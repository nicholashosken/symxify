import { SecurityFields } from "./securityFields";
import { VersionType } from "./versionType";

export interface SecuritySingleSelectableFields {
    includeAllSecurityFields: boolean | null;
    securityFields: SecurityFields;
    version1: VersionType;
}