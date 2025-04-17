import { WorkFlowRepGenFields } from "./workFlowRepGenFields";
import { VersionType } from "./versionType";

export interface WorkFlowRepGenSingleSelectableFields {
    includeAllWorkFlowRepGenFields: boolean | null;
    workFlowRepGenFields: WorkFlowRepGenFields;
    version1: VersionType;
}