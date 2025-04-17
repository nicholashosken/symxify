import { ShareAnalysisGroup } from "./shareAnalysisGroup";
import { VersionType } from "./versionType";

export interface ShareAnalysisGroupSelectFieldsResponse {
    shareAnalysisGroup: ShareAnalysisGroup;
    version1: VersionType;
    messageId: string;
}