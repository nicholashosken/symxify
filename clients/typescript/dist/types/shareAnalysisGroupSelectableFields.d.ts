import { ShareAnalysisGroupFields } from "./shareAnalysisGroupFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareAnalysisGroupSelectableFields {
    includeAllShareAnalysisGroupFieldsValue: boolean;
    includeAllShareAnalysisGroupFieldsValueSpecified: boolean;
    includeAllShareAnalysisGroupFields: boolean | null;
    shareAnalysisGroupFields: ShareAnalysisGroupFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
