import { ApWorkFlowFields } from "./apWorkFlowFields";
import { VersionType } from "./versionType";
export interface ApWorkFlowSingleSelectableFields {
    includeAllApWorkFlowFields: boolean | null;
    apWorkFlowFields: ApWorkFlowFields;
    version1: VersionType;
}
