import { CollateralFmHistory } from "./collateralFmHistory";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CollateralFmHistoryPagedListSelectFieldsResponse {
    collateralFmHistory: CollateralFmHistory[];
    collateralFmHistorySpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}