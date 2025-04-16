import { AnalysisGlobalFields } from "./analysisGlobalFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AnalysisGlobalSingleSelectableFields {
    includeAllAnalysisGlobalFieldsValue: boolean;
    includeAllAnalysisGlobalFieldsValueSpecified: boolean;
    includeAllAnalysisGlobalFields: boolean | null;
    analysisGlobalFields: AnalysisGlobalFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}