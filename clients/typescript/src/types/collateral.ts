import { CollateralCollHoldList } from "./collateralCollHoldList";
import { CollateralDocumentList } from "./collateralDocumentList";
import { CollateralFmHistoryList } from "./collateralFmHistoryList";
import { CollateralTrackingList } from "./collateralTrackingList";
import { VersionType } from "./versionType";

export interface Collateral {
    collateralAppStatus: number | null;
    collateralCollHoldList: CollateralCollHoldList;
    collateralDocumentList: CollateralDocumentList;
    collateralFmHistoryList: CollateralFmHistoryList;
    collateralOwner: string;
    collateralTrackingList: CollateralTrackingList;
    createDate: string | null;
    description: string;
    expireDate: string | null;
    fmLastPurgeDate: string | null;
    lastFmDate: string | null;
    number: string;
    recordChangeDate: string | null;
    requiredDocumentList: string;
    type: number | null;
    userChar1: string;
    userChar2: string;
    userChar3: string;
    userChar4: string;
    userChar5: string;
    userChar6: string;
    value: number | null;
    valueDate: string | null;
    valueSource: string;
    version1: VersionType;
}