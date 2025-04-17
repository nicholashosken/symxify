import { ShareAnalysis } from "./shareAnalysis";
import { VersionType } from "./versionType";
export interface ShareAnalysisSelectFieldsResponse {
    shareAnalysis: ShareAnalysis;
    version1: VersionType;
    messageId: string;
}
