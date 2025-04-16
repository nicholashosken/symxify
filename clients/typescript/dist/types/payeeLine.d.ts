import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PayeeLine {
    lineValue: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    payeeLineNumber: number;
}
