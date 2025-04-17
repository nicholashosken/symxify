import { ReservePlan } from "./reservePlan";
import { VersionType } from "./versionType";

export interface ReservePlanSearchPagedSelectFieldsResponse {
    reservePlan: ReservePlan[];
    token: string;
    version1: VersionType;
    messageId: string;
}