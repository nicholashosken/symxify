import { CollateralFmHistory } from "./collateralFmHistory";
import { VersionType } from "./versionType";

export interface CollateralFmHistorySearchPagedSelectFieldsResponse {
    collateralFmHistory: CollateralFmHistory[];
    token: string;
    version1: VersionType;
    messageId: string;
}