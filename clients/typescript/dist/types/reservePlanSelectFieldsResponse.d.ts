import { ReservePlan } from "./reservePlan";
import { VersionType } from "./versionType";
export interface ReservePlanSelectFieldsResponse {
    reservePlan: ReservePlan;
    version1: VersionType;
    messageId: string;
}
