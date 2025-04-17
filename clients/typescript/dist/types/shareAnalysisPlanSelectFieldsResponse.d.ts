import { ShareAnalysisPlan } from "./shareAnalysisPlan";
import { VersionType } from "./versionType";
export interface ShareAnalysisPlanSelectFieldsResponse {
    shareAnalysisPlan: ShareAnalysisPlan;
    version1: VersionType;
    messageId: string;
}
