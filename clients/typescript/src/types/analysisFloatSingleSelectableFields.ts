import { AnalysisFloatFields } from "./analysisFloatFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AnalysisFloatSingleSelectableFields {
    includeAllAnalysisFloatFieldsValue: boolean;
    includeAllAnalysisFloatFieldsValueSpecified: boolean;
    includeAllAnalysisFloatFields: boolean | null;
    analysisFloatFields: AnalysisFloatFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}