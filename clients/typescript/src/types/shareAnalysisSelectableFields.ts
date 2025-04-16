import { ShareAnalysisFields } from "./shareAnalysisFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareAnalysisSelectableFields {
    includeAllShareAnalysisFieldsValue: boolean;
    includeAllShareAnalysisFieldsValueSpecified: boolean;
    includeAllShareAnalysisFields: boolean | null;
    shareAnalysisFields: ShareAnalysisFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}