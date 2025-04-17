import { WorkFlowRepGen } from "./workFlowRepGen";
import { VersionType } from "./versionType";

export interface WorkFlowRepGenSelectFieldsResponse {
    workFlowRepGen: WorkFlowRepGen;
    version1: VersionType;
    messageId: string;
}