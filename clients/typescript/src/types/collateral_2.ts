import { VersionType } from "./versionType";

export interface Collateral_2 {
    collateralAppStatus: number | null;
    collateralOwner: string;
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