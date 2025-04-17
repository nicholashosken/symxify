import { PlanDefault } from "./planDefault";
import { VersionType } from "./versionType";
export interface PlanDefaultSearchPagedSelectFieldsResponse {
    planDefault: PlanDefault[];
    token: string;
    version1: VersionType;
    messageId: string;
}
