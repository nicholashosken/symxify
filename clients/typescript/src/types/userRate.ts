import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UserRate {
    id: number;
    value: number;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}