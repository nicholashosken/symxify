import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface TrackingCodeFields {
    codeValue: boolean;
    codeValueSpecified: boolean;
    code: boolean | null;
    descriptionValue: boolean;
    descriptionValueSpecified: boolean;
    description: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
