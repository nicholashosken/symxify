import { GlAccountFields } from "./glAccountFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlAccountSingleSelectableFields {
    includeAllGlAccountFieldsValue: boolean;
    includeAllGlAccountFieldsValueSpecified: boolean;
    includeAllGlAccountFields: boolean | null;
    glAccountFields: GlAccountFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}