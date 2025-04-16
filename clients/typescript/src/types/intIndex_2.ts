import { IntIndexEffectiveDate_2 } from "./intIndexEffectiveDate_2";
import { IntIndexIndexRate_2 } from "./intIndexIndexRate_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface IntIndex_2 {
    definedCodeValue: number;
    definedCodeValueSpecified: boolean;
    definedCode: number | null;
    description: string;
    effectiveDate: IntIndexEffectiveDate_2[];
    effectiveDateSpecified: boolean;
    indexFrequency: string;
    indexRate: IntIndexIndexRate_2[];
    indexRateSpecified: boolean;
    indexSource: string;
    interestRateIndexValue: number;
    interestRateIndexValueSpecified: boolean;
    interestRateIndex: number | null;
    typeValue: number;
    typeValueSpecified: boolean;
    type: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}