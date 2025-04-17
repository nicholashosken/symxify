import { IntIndexEffectiveDate_2 } from "./intIndexEffectiveDate_2";
import { IntIndexIndexRate_2 } from "./intIndexIndexRate_2";
import { VersionType } from "./versionType";
export interface IntIndex_2 {
    definedCode: number | null;
    description: string;
    effectiveDate: IntIndexEffectiveDate_2[];
    indexFrequency: string;
    indexRate: IntIndexIndexRate_2[];
    indexSource: string;
    interestRateIndex: number | null;
    type: number | null;
    version1: VersionType;
}
