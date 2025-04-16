import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface YellowHammerFields {
    description: number[];
    descriptionSpecified: boolean;
    enabledValue: boolean;
    enabledValueSpecified: boolean;
    enabled: boolean | null;
    errorMessageValue: boolean;
    errorMessageValueSpecified: boolean;
    errorMessage: boolean | null;
    exemptServiceCodeValue: boolean;
    exemptServiceCodeValueSpecified: boolean;
    exemptServiceCode: boolean | null;
    privilege: number[];
    privilegeSpecified: boolean;
    ruleId: number[];
    ruleIdSpecified: boolean;
    warning: number[];
    warningSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}