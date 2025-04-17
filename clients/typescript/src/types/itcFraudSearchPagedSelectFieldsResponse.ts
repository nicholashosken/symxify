import { ItcFraud } from "./itcFraud";
import { VersionType } from "./versionType";

export interface ItcFraudSearchPagedSelectFieldsResponse {
    itcFraud: ItcFraud[];
    token: string;
    version1: VersionType;
    messageId: string;
}