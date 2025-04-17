import { EventSummariesByAccount } from "./eventSummariesByAccount";
import { VersionType } from "./versionType";
import { BaseResponse } from "./baseResponse";

export interface GetEventSummariesByAccountResponse extends BaseResponse {
    data: EventSummariesByAccount[];
    details: string;
    version1: VersionType;
}