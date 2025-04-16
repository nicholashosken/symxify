import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface Statistics {
    durationInMillisValue: number;
    durationInMillisValueSpecified: boolean;
    durationInMillis: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
