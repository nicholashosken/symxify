import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WorkFlowRepGenFields {
    specfileValue: boolean;
    specfileValueSpecified: boolean;
    specfile: boolean | null;
    specfileDescriptionValue: boolean;
    specfileDescriptionValueSpecified: boolean;
    specfileDescription: boolean | null;
    specfileNameValue: boolean;
    specfileNameValueSpecified: boolean;
    specfileName: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
