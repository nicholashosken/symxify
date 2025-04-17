import { WorkFlowRepGenFields } from "./workFlowRepGenFields";
import { VersionType } from "./versionType";
export interface WorkFlowRepGenSelectableFields {
    includeAllWorkFlowRepGenFields: boolean | null;
    workFlowRepGenFields: WorkFlowRepGenFields;
    version1: VersionType;
}
