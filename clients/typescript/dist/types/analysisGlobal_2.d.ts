import { AnalysisGlobalCounter_2 } from "./analysisGlobalCounter_2";
import { VersionType } from "./versionType";
export interface AnalysisGlobal_2 {
    analyzedSharePromptSetting: number | null;
    counter: AnalysisGlobalCounter_2[];
    investableBalanceCalcType: number | null;
    nonAnlyzdShrPromptSetting: number | null;
    onUsCountSetting: number | null;
    reserveCalculationType: number | null;
    reserveRate: number | null;
    usePromptSettings: boolean | null;
    version1: VersionType;
}
