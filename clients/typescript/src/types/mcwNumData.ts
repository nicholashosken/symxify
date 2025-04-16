import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface McwNumData {
    id: number;
    value: number;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}