import { MbrAddressFmHistory } from "./mbrAddressFmHistory";
import { VersionType } from "./versionType";

export interface MbrAddressFmHistorySearchPagedSelectFieldsResponse {
    mbrAddressFmHistory: MbrAddressFmHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}