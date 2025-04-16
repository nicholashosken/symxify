import { ShareAnalysisGroup } from "./shareAnalysisGroup";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareAnalysisGroupSearchPagedSelectFieldsResponse {
    shareAnalysisGroup: ShareAnalysisGroup[];
    shareAnalysisGroupSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}