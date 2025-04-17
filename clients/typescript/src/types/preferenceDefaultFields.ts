import { VersionType } from "./versionType";

export interface PreferenceDefaultFields {
    audioAccess: boolean | null;
    audioAccess2: boolean | null;
    audioEnable: boolean | null;
    billPayCountLimit: boolean | null;
    billPayLimit: boolean | null;
    billPayMax: boolean | null;
    depCountLimit: boolean | null;
    depLimit: boolean | null;
    depMax: boolean | null;
    hbEnable: boolean | null;
    hbMode: boolean | null;
    interactMode: boolean | null;
    language: boolean | null;
    listTransactions: boolean | null;
    reference: boolean | null;
    tranCodes: boolean | null;
    type: boolean | null;
    userCode: boolean | null;
    wdCashCountLimit: boolean | null;
    wdCashLimit: boolean | null;
    wdCashMax: boolean | null;
    wdCheckCountLimit: boolean | null;
    wdCheckLimit: boolean | null;
    wdCheckMax: boolean | null;
    xferCountLimit: boolean | null;
    xferLimit: boolean | null;
    xferMax: boolean | null;
    version1: VersionType;
}