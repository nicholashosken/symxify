import { SecondaryVerification } from "./secondaryVerification";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface HomeBankingCredentials {
    userName: string;
    password: string;
    secondaryVerification: SecondaryVerification;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
