import { AnalysisPlan } from "./analysisPlan";
import { VersionType } from "./versionType";

export interface AnalysisPlanSearchPagedSelectFieldsResponse {
    analysisPlan: AnalysisPlan[];
    token: string;
    version1: VersionType;
    messageId: string;
}