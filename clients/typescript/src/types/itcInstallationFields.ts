import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ItcInstallationFields {
    branchListValue: boolean;
    branchListValueSpecified: boolean;
    branchList: boolean | null;
    definedCodeValue: boolean;
    definedCodeValueSpecified: boolean;
    definedCode: boolean | null;
    itcEnabledValue: boolean;
    itcEnabledValueSpecified: boolean;
    itcEnabled: boolean | null;
    itcInstallationValue: boolean;
    itcInstallationValueSpecified: boolean;
    itcInstallation: boolean | null;
    targetPathValue: boolean;
    targetPathValueSpecified: boolean;
    targetPath: boolean | null;
    timeOutinMinutesValue: boolean;
    timeOutinMinutesValueSpecified: boolean;
    timeOutinMinutes: boolean | null;
    voidEnabledValue: boolean;
    voidEnabledValueSpecified: boolean;
    voidEnabled: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}