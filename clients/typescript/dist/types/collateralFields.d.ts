import { VersionType } from "./versionType";
export interface CollateralFields {
    collateralAppStatus: boolean | null;
    collateralOwner: boolean | null;
    createDate: boolean | null;
    description: boolean | null;
    expireDate: boolean | null;
    fmLastPurgeDate: boolean | null;
    lastFmDate: boolean | null;
    number: boolean | null;
    recordChangeDate: boolean | null;
    requiredDocumentList: boolean | null;
    type: boolean | null;
    userChar1: boolean | null;
    userChar2: boolean | null;
    userChar3: boolean | null;
    userChar4: boolean | null;
    userChar5: boolean | null;
    userChar6: boolean | null;
    value: boolean | null;
    valueDate: boolean | null;
    valueSource: boolean | null;
    version1: VersionType;
}
