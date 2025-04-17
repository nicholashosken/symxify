import { EventSummariesByAccount } from "./eventSummariesByAccount";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { BaseResponse } from "./baseResponse";
export interface GetEventSummariesByAccountResponse extends BaseResponse {
    data: EventSummariesByAccount[];
    dataSpecified: boolean;
    details: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
