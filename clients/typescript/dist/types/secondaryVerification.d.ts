import { VersionType } from "./versionType";
export interface SecondaryVerification {
    socialSecurityNumber: string;
    ssnLastFourDigits: string;
    secondaryHomeBankingPassword: string;
    secondaryAudioAccessCode: string;
    version1: VersionType;
}
