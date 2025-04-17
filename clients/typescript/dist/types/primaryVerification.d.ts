import { VersionType } from "./versionType";
export interface PrimaryVerification {
    audioAccessCode: string;
    homeBankingPassword: string;
    version1: VersionType;
}
