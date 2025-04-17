import { NonAcctNameFmHistory } from "./nonAcctNameFmHistory";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface NonAcctNameFmHistoryPagedListSelectFieldsResponse {
    nonAcctNameFmHistory: NonAcctNameFmHistory[];
    nonAcctNameFmHistorySpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}