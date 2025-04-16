import { LookupFields } from "./lookupFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LookupSelectableFields {
    includeAllLookupFieldsValue: boolean;
    includeAllLookupFieldsValueSpecified: boolean;
    includeAllLookupFields: boolean | null;
    lookupFields: LookupFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
