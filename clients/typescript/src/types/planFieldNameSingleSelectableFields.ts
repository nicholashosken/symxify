import { PlanFieldNameFields } from "./planFieldNameFields";
import { VersionType } from "./versionType";

export interface PlanFieldNameSingleSelectableFields {
    includeAllPlanFieldNameFields: boolean | null;
    planFieldNameFields: PlanFieldNameFields;
    version1: VersionType;
}