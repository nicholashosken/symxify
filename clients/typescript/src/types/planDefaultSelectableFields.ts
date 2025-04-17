import { PlanDefaultFields } from "./planDefaultFields";
import { VersionType } from "./versionType";

export interface PlanDefaultSelectableFields {
    includeAllPlanDefaultFields: boolean | null;
    planDefaultFields: PlanDefaultFields;
    version1: VersionType;
}