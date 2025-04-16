import { SecurityFields } from "./securityFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SecuritySelectableFields {
    includeAllSecurityFieldsValue: boolean;
    includeAllSecurityFieldsValueSpecified: boolean;
    includeAllSecurityFields: boolean | null;
    securityFields: SecurityFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}