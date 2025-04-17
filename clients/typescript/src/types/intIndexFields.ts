import { VersionType } from "./versionType";

export interface IntIndexFields {
    definedCode: boolean | null;
    description: boolean | null;
    effectiveDate: number[];
    indexFrequency: boolean | null;
    indexRate: number[];
    indexSource: boolean | null;
    interestRateIndex: boolean | null;
    type: boolean | null;
    version1: VersionType;
}