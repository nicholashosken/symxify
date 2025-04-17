import { WireFmHistory } from "./wireFmHistory";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireFmHistoryPagedListSelectFieldsResponse {
    wireFmHistory: WireFmHistory[];
    wireFmHistorySpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}