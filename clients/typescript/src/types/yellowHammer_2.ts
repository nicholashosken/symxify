import { YellowHammerDescription_2 } from "./yellowHammerDescription_2";
import { YellowHammerPrivilege_2 } from "./yellowHammerPrivilege_2";
import { YellowHammerRuleId_2 } from "./yellowHammerRuleId_2";
import { YellowHammerWarning_2 } from "./yellowHammerWarning_2";
import { VersionType } from "./versionType";

export interface YellowHammer_2 {
    description: YellowHammerDescription_2[];
    enabled: boolean | null;
    errorMessage: string;
    exemptServiceCode: number | null;
    privilege: YellowHammerPrivilege_2[];
    ruleId: YellowHammerRuleId_2[];
    warning: YellowHammerWarning_2[];
    version1: VersionType;
}