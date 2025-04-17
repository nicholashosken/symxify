import { VersionType } from "./versionType";
import { ContactEventMgmtBaseRequest } from "./contactEventMgmtBaseRequest";
export interface GetEventSummariesByAccountRequest extends ContactEventMgmtBaseRequest {
    accountNumber: string;
    userNumber: number | null;
    version1: VersionType;
}
