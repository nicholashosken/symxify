import { ShareAnalysisGroup } from "./shareAnalysisGroup";
import { VersionType } from "./versionType";

export interface ShareAnalysisGroupSearchPagedSelectFieldsResponse {
    shareAnalysisGroup: ShareAnalysisGroup[];
    token: string;
    version1: VersionType;
    messageId: string;
}