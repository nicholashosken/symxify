import { ShareAnalysisGroup } from "./shareAnalysisGroup";
import { VersionType } from "./versionType";

export interface ShareAnalysisGroupPagedListSelectFieldsResponse {
    shareAnalysisGroup: ShareAnalysisGroup[];
    token: string;
    version1: VersionType;
    messageId: string;
}