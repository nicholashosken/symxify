import { Atm } from "./atm";
import { VersionType } from "./versionType";
export interface AtmSelectFieldsResponse {
    atm: Atm;
    version1: VersionType;
    messageId: string;
}
