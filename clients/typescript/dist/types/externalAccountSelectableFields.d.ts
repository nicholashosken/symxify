import { ExternalAccountFields } from "./externalAccountFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExternalAccountSelectableFields {
    includeAllExternalAccountFieldsValue: boolean;
    includeAllExternalAccountFieldsValueSpecified: boolean;
    includeAllExternalAccountFields: boolean | null;
    externalAccountFields: ExternalAccountFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
