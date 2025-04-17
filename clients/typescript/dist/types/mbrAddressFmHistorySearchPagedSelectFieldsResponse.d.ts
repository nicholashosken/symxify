import { MbrAddressFmHistory } from "./mbrAddressFmHistory";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface MbrAddressFmHistorySearchPagedSelectFieldsResponse {
    mbrAddressFmHistory: MbrAddressFmHistory[];
    mbrAddressFmHistorySpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
