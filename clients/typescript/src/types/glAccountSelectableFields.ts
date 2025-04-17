import { GlAccountFields } from "./glAccountFields";
import { GlAccountFmHistorySelectableFields } from "./glAccountFmHistorySelectableFields";
import { GlAccountTrackingSelectableFields } from "./glAccountTrackingSelectableFields";
import { GlHistorySelectableFields } from "./glHistorySelectableFields";
import { GlSubaccountSelectableFields } from "./glSubaccountSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlAccountSelectableFields {
    includeAllGlAccountFieldsValue: boolean;
    includeAllGlAccountFieldsValueSpecified: boolean;
    includeAllGlAccountFields: boolean | null;
    glAccountFields: GlAccountFields;
    glAccountFmHistorySelectableFields: GlAccountFmHistorySelectableFields;
    glAccountTrackingSelectableFields: GlAccountTrackingSelectableFields;
    glHistorySelectableFields: GlHistorySelectableFields;
    glSubaccountSelectableFields: GlSubaccountSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}