import { AnalysisGlobal } from "./analysisGlobal";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AnalysisGlobalSelectFieldsResponse {
    analysisGlobal: AnalysisGlobal;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}