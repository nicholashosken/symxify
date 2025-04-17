import { YellowHammerDescription } from "./yellowHammerDescription";
import { YellowHammerPrivilege } from "./yellowHammerPrivilege";
import { YellowHammerRuleId } from "./yellowHammerRuleId";
import { YellowHammerWarning } from "./yellowHammerWarning";
import { VersionType } from "./versionType";

export interface YellowHammer {
    description: YellowHammerDescription[];
    enabled: boolean | null;
    errorMessage: string;
    exemptServiceCode: number | null;
    privilege: YellowHammerPrivilege[];
    ruleId: YellowHammerRuleId[];
    warning: YellowHammerWarning[];
    version1: VersionType;
}