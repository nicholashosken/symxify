import { PositivePay } from "./positivePay";
import { VersionType } from "./versionType";

export interface PositivePayPagedListSelectFieldsResponse {
    positivePay: PositivePay[];
    token: string;
    version1: VersionType;
    messageId: string;
}