import { ShareAnalysis } from "./shareAnalysis";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareAnalysisSelectFieldsResponse {
    shareAnalysis: ShareAnalysis;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}