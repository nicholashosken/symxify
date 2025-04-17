import { CheckFmHistory } from "./checkFmHistory";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CheckFmHistoryPagedListSelectFieldsResponse {
    checkFmHistory: CheckFmHistory[];
    checkFmHistorySpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}