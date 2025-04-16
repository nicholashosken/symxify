import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UserNumberCredentials {
    userNumberValue: number;
    userNumberValueSpecified: boolean;
    userNumber: number | null;
    password: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
