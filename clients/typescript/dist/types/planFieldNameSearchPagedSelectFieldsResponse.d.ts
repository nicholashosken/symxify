import { PlanFieldName } from "./planFieldName";
import { VersionType } from "./versionType";
export interface PlanFieldNameSearchPagedSelectFieldsResponse {
    planFieldName: PlanFieldName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
