import { ItcFraud } from "./itcFraud";
import { VersionType } from "./versionType";

export interface ItcFraudPagedListSelectFieldsResponse {
    itcFraud: ItcFraud[];
    token: string;
    version1: VersionType;
    messageId: string;
}