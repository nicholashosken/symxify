import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PrimaryVerification {
    audioAccessCode: string;
    homeBankingPassword: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
