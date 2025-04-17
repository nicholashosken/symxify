import { DealerFmHistory } from "./dealerFmHistory";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DealerFmHistorySearchPagedSelectFieldsResponse {
    dealerFmHistory: DealerFmHistory[];
    dealerFmHistorySpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
