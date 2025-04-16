import { GlTrackingTypeFields } from "./glTrackingTypeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlTrackingTypeSingleSelectableFields {
    includeAllGlTrackingTypeFieldsValue: boolean;
    includeAllGlTrackingTypeFieldsValueSpecified: boolean;
    includeAllGlTrackingTypeFields: boolean | null;
    glTrackingTypeFields: GlTrackingTypeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
