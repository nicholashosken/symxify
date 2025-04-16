import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface Ncua5300Filter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}