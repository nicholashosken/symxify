import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { ContactEventMgmtBaseRequest } from "./contactEventMgmtBaseRequest";
export interface GetEventSummariesByAccountRequest extends ContactEventMgmtBaseRequest {
    accountNumber: string;
    userNumberValue: number;
    userNumberValueSpecified: boolean;
    userNumber: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
