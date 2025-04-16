import { AnalysisFloat } from "./analysisFloat";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AnalysisFloatPagedListSelectFieldsResponse {
    analysisFloat: AnalysisFloat[];
    analysisFloatSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
