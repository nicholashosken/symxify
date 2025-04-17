import { GlAccountFmHistoryFields } from "./glAccountFmHistoryFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlAccountFmHistorySingleSelectableFields {
    includeAllGlAccountFmHistoryFieldsValue: boolean;
    includeAllGlAccountFmHistoryFieldsValueSpecified: boolean;
    includeAllGlAccountFmHistoryFields: boolean | null;
    glAccountFmHistoryFields: GlAccountFmHistoryFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
