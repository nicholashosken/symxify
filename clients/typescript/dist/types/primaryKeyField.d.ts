import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PrimaryKeyField {
    name: string;
    value: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
