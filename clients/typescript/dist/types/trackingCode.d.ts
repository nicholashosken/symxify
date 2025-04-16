import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface TrackingCode {
    codeValue: number;
    codeValueSpecified: boolean;
    code: number | null;
    description: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
