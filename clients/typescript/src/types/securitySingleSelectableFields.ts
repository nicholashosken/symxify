import { SecurityFields } from "./securityFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SecuritySingleSelectableFields {
    includeAllSecurityFieldsValue: boolean;
    includeAllSecurityFieldsValueSpecified: boolean;
    includeAllSecurityFields: boolean | null;
    securityFields: SecurityFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}