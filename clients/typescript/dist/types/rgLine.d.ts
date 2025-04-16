import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface RgLine {
    lineValue: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    lineNumberValue: number;
    lineNumberValueSpecified: boolean;
    lineNumber: number | null;
}
