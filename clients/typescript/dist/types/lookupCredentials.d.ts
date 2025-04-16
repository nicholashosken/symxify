import { SecondaryVerification } from "./secondaryVerification";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LookupCredentials {
    typeValue: number;
    typeValueSpecified: boolean;
    type: number | null;
    value: string;
    optionalUserCodeValue: number;
    optionalUserCodeValueSpecified: boolean;
    optionalUserCode: number | null;
    homeBankingPassword: string;
    audioAccessCode: string;
    secondaryVerification: SecondaryVerification;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
