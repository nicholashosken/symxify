import { AnalysisPlan } from "./analysisPlan";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AnalysisPlanSelectFieldsResponse {
    analysisPlan: AnalysisPlan;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
