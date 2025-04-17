import { AnalysisGlobalCounter } from "./analysisGlobalCounter";
import { VersionType } from "./versionType";

export interface AnalysisGlobal {
    analyzedSharePromptSetting: number | null;
    counter: AnalysisGlobalCounter[];
    investableBalanceCalcType: number | null;
    nonAnlyzdShrPromptSetting: number | null;
    onUsCountSetting: number | null;
    reserveCalculationType: number | null;
    reserveRate: number | null;
    usePromptSettings: boolean | null;
    version1: VersionType;
}