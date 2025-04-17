import { PlanDefaultFields } from "./planDefaultFields";
import { VersionType } from "./versionType";

export interface PlanDefaultSingleSelectableFields {
    includeAllPlanDefaultFields: boolean | null;
    planDefaultFields: PlanDefaultFields;
    version1: VersionType;
}