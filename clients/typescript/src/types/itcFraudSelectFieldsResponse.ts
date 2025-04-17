import { ItcFraud } from "./itcFraud";
import { VersionType } from "./versionType";

export interface ItcFraudSelectFieldsResponse {
    itcFraud: ItcFraud;
    version1: VersionType;
    messageId: string;
}