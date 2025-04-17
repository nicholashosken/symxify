import { ApWorkFlowFields } from "./apWorkFlowFields";
import { VersionType } from "./versionType";
export interface ApWorkFlowSelectableFields {
    includeAllApWorkFlowFields: boolean | null;
    apWorkFlowFields: ApWorkFlowFields;
    version1: VersionType;
}
