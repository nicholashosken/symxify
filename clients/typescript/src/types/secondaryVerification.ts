import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SecondaryVerification {
    socialSecurityNumber: string;
    ssnLastFourDigits: string;
    secondaryHomeBankingPassword: string;
    secondaryAudioAccessCode: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}