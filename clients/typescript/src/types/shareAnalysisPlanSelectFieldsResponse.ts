import { ShareAnalysisPlan } from "./shareAnalysisPlan";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareAnalysisPlanSelectFieldsResponse {
    shareAnalysisPlan: ShareAnalysisPlan;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}