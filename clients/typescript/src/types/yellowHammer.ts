import { YellowHammerDescription } from "./yellowHammerDescription";
import { YellowHammerPrivilege } from "./yellowHammerPrivilege";
import { YellowHammerRuleId } from "./yellowHammerRuleId";
import { YellowHammerWarning } from "./yellowHammerWarning";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface YellowHammer {
    description: YellowHammerDescription[];
    descriptionSpecified: boolean;
    enabledValue: boolean;
    enabledValueSpecified: boolean;
    enabled: boolean | null;
    errorMessage: string;
    exemptServiceCodeValue: number;
    exemptServiceCodeValueSpecified: boolean;
    exemptServiceCode: number | null;
    privilege: YellowHammerPrivilege[];
    privilegeSpecified: boolean;
    ruleId: YellowHammerRuleId[];
    ruleIdSpecified: boolean;
    warning: YellowHammerWarning[];
    warningSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}