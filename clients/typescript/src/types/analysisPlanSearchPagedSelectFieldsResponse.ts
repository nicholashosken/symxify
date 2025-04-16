import { AnalysisPlan } from "./analysisPlan";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AnalysisPlanSearchPagedSelectFieldsResponse {
    analysisPlan: AnalysisPlan[];
    analysisPlanSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}