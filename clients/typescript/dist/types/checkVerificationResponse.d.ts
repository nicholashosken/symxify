import { Status_2 } from "./status_2";
import { VersionType } from "./versionType";
export interface CheckVerificationResponse {
    status: Status_2;
    version1: VersionType;
    messageId: string;
}
