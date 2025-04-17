import { ReservePlan } from "./reservePlan";
import { VersionType } from "./versionType";
export interface ReservePlanPagedListSelectFieldsResponse {
    reservePlan: ReservePlan[];
    token: string;
    version1: VersionType;
    messageId: string;
}
