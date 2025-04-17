import { VersionType } from "./versionType";
export interface Warnings {
    displayWarninginAcctMgr: boolean | null;
    displayWarninginTlrTrn: boolean | null;
    warnDescription: string;
    warnFmPriv: number | null;
    warnIqPriv: number | null;
    warnTrPriv: number | null;
    warningNumber: number | null;
    version1: VersionType;
}
