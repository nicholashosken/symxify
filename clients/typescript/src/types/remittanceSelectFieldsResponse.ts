import { Remittance } from "./remittance";
import { VersionType } from "./versionType";

export interface RemittanceSelectFieldsResponse {
    remittance: Remittance;
    version1: VersionType;
    messageId: string;
}