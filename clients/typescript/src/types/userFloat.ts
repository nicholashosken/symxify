import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UserFloat {
    id: number;
    value: number;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}