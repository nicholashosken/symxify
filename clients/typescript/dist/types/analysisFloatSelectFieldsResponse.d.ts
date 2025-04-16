import { AnalysisFloat } from "./analysisFloat";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AnalysisFloatSelectFieldsResponse {
    analysisFloat: AnalysisFloat;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
