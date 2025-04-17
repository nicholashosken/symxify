import { ExcpAddInfoAdditionInfo } from "./excpAddInfoAdditionInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExcpAddInfo {
    additionInfo: ExcpAddInfoAdditionInfo[];
    additionInfoSpecified: boolean;
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    numberValue: number;
    numberValueSpecified: boolean;
    number: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
