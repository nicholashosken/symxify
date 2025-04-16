import { ShareAnalysis } from "./shareAnalysis";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareAnalysisPagedListSelectFieldsResponse {
    shareAnalysis: ShareAnalysis[];
    shareAnalysisSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}