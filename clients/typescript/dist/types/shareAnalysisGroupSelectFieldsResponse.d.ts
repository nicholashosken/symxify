import { ShareAnalysisGroup } from "./shareAnalysisGroup";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareAnalysisGroupSelectFieldsResponse {
    shareAnalysisGroup: ShareAnalysisGroup;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
