import { WorkFlowRepGen } from "./workFlowRepGen";
import { VersionType } from "./versionType";

export interface WorkFlowRepGenSearchPagedSelectFieldsResponse {
    workFlowRepGen: WorkFlowRepGen[];
    token: string;
    version1: VersionType;
    messageId: string;
}