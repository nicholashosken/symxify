import { YellowHammerDescription_2 } from "./yellowHammerDescription_2";
import { YellowHammerPrivilege_2 } from "./yellowHammerPrivilege_2";
import { YellowHammerRuleId_2 } from "./yellowHammerRuleId_2";
import { YellowHammerWarning_2 } from "./yellowHammerWarning_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface YellowHammer_2 {
    description: YellowHammerDescription_2[];
    descriptionSpecified: boolean;
    enabledValue: boolean;
    enabledValueSpecified: boolean;
    enabled: boolean | null;
    errorMessage: string;
    exemptServiceCodeValue: number;
    exemptServiceCodeValueSpecified: boolean;
    exemptServiceCode: number | null;
    privilege: YellowHammerPrivilege_2[];
    privilegeSpecified: boolean;
    ruleId: YellowHammerRuleId_2[];
    ruleIdSpecified: boolean;
    warning: YellowHammerWarning_2[];
    warningSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}