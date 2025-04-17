import { PositivePay } from "./positivePay";
import { VersionType } from "./versionType";

export interface PositivePaySelectFieldsResponse {
    positivePay: PositivePay;
    version1: VersionType;
    messageId: string;
}