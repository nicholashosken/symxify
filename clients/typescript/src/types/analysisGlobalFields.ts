import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AnalysisGlobalFields {
    analyzedSharePromptSettingValue: boolean;
    analyzedSharePromptSettingValueSpecified: boolean;
    analyzedSharePromptSetting: boolean | null;
    counter: number[];
    counterSpecified: boolean;
    investableBalanceCalcTypeValue: boolean;
    investableBalanceCalcTypeValueSpecified: boolean;
    investableBalanceCalcType: boolean | null;
    nonAnlyzdShrPromptSettingValue: boolean;
    nonAnlyzdShrPromptSettingValueSpecified: boolean;
    nonAnlyzdShrPromptSetting: boolean | null;
    onUsCountSettingValue: boolean;
    onUsCountSettingValueSpecified: boolean;
    onUsCountSetting: boolean | null;
    reserveCalculationTypeValue: boolean;
    reserveCalculationTypeValueSpecified: boolean;
    reserveCalculationType: boolean | null;
    reserveRateValue: boolean;
    reserveRateValueSpecified: boolean;
    reserveRate: boolean | null;
    usePromptSettingsValue: boolean;
    usePromptSettingsValueSpecified: boolean;
    usePromptSettings: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}