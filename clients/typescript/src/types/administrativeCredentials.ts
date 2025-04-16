import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AdministrativeCredentials {
    password: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}