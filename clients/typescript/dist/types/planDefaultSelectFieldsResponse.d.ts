import { PlanDefault } from "./planDefault";
import { VersionType } from "./versionType";
export interface PlanDefaultSelectFieldsResponse {
    planDefault: PlanDefault;
    version1: VersionType;
    messageId: string;
}
