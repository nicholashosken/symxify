import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface Identification {
    homeBankingUserName: string;
    userCodeValue: number;
    userCodeValueSpecified: boolean;
    userCode: number | null;
    loginAccountNumber: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}