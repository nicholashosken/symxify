import { PlanFieldName } from "./planFieldName";
import { VersionType } from "./versionType";

export interface PlanFieldNamePagedListSelectFieldsResponse {
    planFieldName: PlanFieldName[];
    token: string;
    version1: VersionType;
    messageId: string;
}