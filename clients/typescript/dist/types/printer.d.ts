import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface Printer {
    printerId: number;
    amount: number;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
