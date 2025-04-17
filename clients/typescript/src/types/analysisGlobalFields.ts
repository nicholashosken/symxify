import { VersionType } from "./versionType";

export interface AnalysisGlobalFields {
    analyzedSharePromptSetting: boolean | null;
    counter: number[];
    investableBalanceCalcType: boolean | null;
    nonAnlyzdShrPromptSetting: boolean | null;
    onUsCountSetting: boolean | null;
    reserveCalculationType: boolean | null;
    reserveRate: boolean | null;
    usePromptSettings: boolean | null;
    version1: VersionType;
}