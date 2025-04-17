import { VersionType } from "./versionType";
export interface YellowHammerFields {
    description: number[];
    enabled: boolean | null;
    errorMessage: boolean | null;
    exemptServiceCode: boolean | null;
    privilege: number[];
    ruleId: number[];
    warning: number[];
    version1: VersionType;
}
