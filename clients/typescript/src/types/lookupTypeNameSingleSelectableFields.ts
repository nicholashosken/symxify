import { LookupTypeNameFields } from "./lookupTypeNameFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LookupTypeNameSingleSelectableFields {
    includeAllLookupTypeNameFieldsValue: boolean;
    includeAllLookupTypeNameFieldsValueSpecified: boolean;
    includeAllLookupTypeNameFields: boolean | null;
    lookupTypeNameFields: LookupTypeNameFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}