import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface McwDateData {
    id: number;
    value: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
