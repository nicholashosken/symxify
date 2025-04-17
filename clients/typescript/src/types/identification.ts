import { VersionType } from "./versionType";

export interface Identification {
    homeBankingUserName: string;
    userCode: number | null;
    loginAccountNumber: string;
    version1: VersionType;
}