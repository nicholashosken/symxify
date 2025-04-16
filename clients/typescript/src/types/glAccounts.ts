import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlAccounts {
    clearingAccount: string;
    checkDisbursedAccount: string;
    externalAccount: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}