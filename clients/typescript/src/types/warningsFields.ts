import { VersionType } from "./versionType";

export interface WarningsFields {
    displayWarninginAcctMgr: boolean | null;
    displayWarninginTlrTrn: boolean | null;
    warnDescription: boolean | null;
    warnFmPriv: boolean | null;
    warnIqPriv: boolean | null;
    warnTrPriv: boolean | null;
    warningNumber: boolean | null;
    version1: VersionType;
}