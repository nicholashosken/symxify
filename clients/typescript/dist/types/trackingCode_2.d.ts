import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface TrackingCode_2 {
    codeValue: number;
    codeValueSpecified: boolean;
    code: number | null;
    description: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
