import { ShareAnalysisPlan } from "./shareAnalysisPlan";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareAnalysisPlanPagedListSelectFieldsResponse {
    shareAnalysisPlan: ShareAnalysisPlan[];
    shareAnalysisPlanSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}