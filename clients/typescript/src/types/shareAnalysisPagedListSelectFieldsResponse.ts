import { ShareAnalysis } from "./shareAnalysis";
import { VersionType } from "./versionType";

export interface ShareAnalysisPagedListSelectFieldsResponse {
    shareAnalysis: ShareAnalysis[];
    token: string;
    version1: VersionType;
    messageId: string;
}