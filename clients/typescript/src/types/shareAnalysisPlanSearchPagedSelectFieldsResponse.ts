import { ShareAnalysisPlan } from "./shareAnalysisPlan";
import { VersionType } from "./versionType";

export interface ShareAnalysisPlanSearchPagedSelectFieldsResponse {
    shareAnalysisPlan: ShareAnalysisPlan[];
    token: string;
    version1: VersionType;
    messageId: string;
}