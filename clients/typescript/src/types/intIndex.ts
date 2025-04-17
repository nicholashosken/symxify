import { IntIndexEffectiveDate } from "./intIndexEffectiveDate";
import { IntIndexIndexRate } from "./intIndexIndexRate";
import { VersionType } from "./versionType";

export interface IntIndex {
    definedCode: number | null;
    description: string;
    effectiveDate: IntIndexEffectiveDate[];
    indexFrequency: string;
    indexRate: IntIndexIndexRate[];
    indexSource: string;
    interestRateIndex: number | null;
    type: number | null;
    version1: VersionType;
}