import { ShareAnalysis } from "./shareAnalysis";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareAnalysisSearchPagedSelectFieldsResponse {
    shareAnalysis: ShareAnalysis[];
    shareAnalysisSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}