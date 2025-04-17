import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExcpAddInfoFields {
    additionInfo: number[];
    additionInfoSpecified: boolean;
    locatorValue: boolean;
    locatorValueSpecified: boolean;
    locator: boolean | null;
    numberValue: boolean;
    numberValueSpecified: boolean;
    number: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
