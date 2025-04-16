import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface Dispenser {
    dispenserId: number;
    amount: number;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}