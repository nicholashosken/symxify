import { AnalysisGlobalCounter_2 } from "./analysisGlobalCounter_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AnalysisGlobal_2 {
    analyzedSharePromptSettingValue: number;
    analyzedSharePromptSettingValueSpecified: boolean;
    analyzedSharePromptSetting: number | null;
    counter: AnalysisGlobalCounter_2[];
    counterSpecified: boolean;
    investableBalanceCalcTypeValue: number;
    investableBalanceCalcTypeValueSpecified: boolean;
    investableBalanceCalcType: number | null;
    nonAnlyzdShrPromptSettingValue: number;
    nonAnlyzdShrPromptSettingValueSpecified: boolean;
    nonAnlyzdShrPromptSetting: number | null;
    onUsCountSettingValue: number;
    onUsCountSettingValueSpecified: boolean;
    onUsCountSetting: number | null;
    reserveCalculationTypeValue: number;
    reserveCalculationTypeValueSpecified: boolean;
    reserveCalculationType: number | null;
    reserveRateValue: number;
    reserveRateValueSpecified: boolean;
    reserveRate: number | null;
    usePromptSettingsValue: boolean;
    usePromptSettingsValueSpecified: boolean;
    usePromptSettings: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}