import { VersionType } from "./versionType";

export interface GlAccounts {
    clearingAccount: string;
    checkDisbursedAccount: string;
    externalAccount: string;
    version1: VersionType;
}