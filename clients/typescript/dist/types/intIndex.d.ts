import { IntIndexEffectiveDate } from "./intIndexEffectiveDate";
import { IntIndexIndexRate } from "./intIndexIndexRate";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface IntIndex {
    definedCodeValue: number;
    definedCodeValueSpecified: boolean;
    definedCode: number | null;
    description: string;
    effectiveDate: IntIndexEffectiveDate[];
    effectiveDateSpecified: boolean;
    indexFrequency: string;
    indexRate: IntIndexIndexRate[];
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
