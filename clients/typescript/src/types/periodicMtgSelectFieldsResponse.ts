import { PeriodicMtg } from "./periodicMtg";
import { VersionType } from "./versionType";

export interface PeriodicMtgSelectFieldsResponse {
    periodicMtg: PeriodicMtg;
    version1: VersionType;
    messageId: string;
}