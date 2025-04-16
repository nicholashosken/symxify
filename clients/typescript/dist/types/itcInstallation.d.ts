import { BitMap } from "./bitMap";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ItcInstallation {
    branchList: BitMap;
    definedCodeValue: number;
    definedCodeValueSpecified: boolean;
    definedCode: number | null;
    itcEnabledValue: boolean;
    itcEnabledValueSpecified: boolean;
    itcEnabled: boolean | null;
    itcInstallationPropertyValue: number;
    itcInstallationPropertyValueSpecified: boolean;
    itcInstallationProperty: number | null;
    targetPath: string;
    timeOutinMinutesValue: number;
    timeOutinMinutesValueSpecified: boolean;
    timeOutinMinutes: number | null;
    voidEnabledValue: boolean;
    voidEnabledValueSpecified: boolean;
    voidEnabled: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
