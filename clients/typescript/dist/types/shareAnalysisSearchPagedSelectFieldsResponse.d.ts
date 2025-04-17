import { ShareAnalysis } from "./shareAnalysis";
import { VersionType } from "./versionType";
export interface ShareAnalysisSearchPagedSelectFieldsResponse {
    shareAnalysis: ShareAnalysis[];
    token: string;
    version1: VersionType;
    messageId: string;
}
