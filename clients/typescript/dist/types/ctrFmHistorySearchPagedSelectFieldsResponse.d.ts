import { CtrFmHistory } from "./ctrFmHistory";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrFmHistorySearchPagedSelectFieldsResponse {
    ctrFmHistory: CtrFmHistory[];
    ctrFmHistorySpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
