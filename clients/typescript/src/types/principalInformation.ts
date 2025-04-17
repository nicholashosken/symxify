import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PrincipalInformation {
    principal: string;
    name: string;
    phone: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}