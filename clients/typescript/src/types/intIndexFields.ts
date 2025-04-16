import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface IntIndexFields {
    definedCodeValue: boolean;
    definedCodeValueSpecified: boolean;
    definedCode: boolean | null;
    descriptionValue: boolean;
    descriptionValueSpecified: boolean;
    description: boolean | null;
    effectiveDate: number[];
    effectiveDateSpecified: boolean;
    indexFrequencyValue: boolean;
    indexFrequencyValueSpecified: boolean;
    indexFrequency: boolean | null;
    indexRate: number[];
    indexRateSpecified: boolean;
    indexSourceValue: boolean;
    indexSourceValueSpecified: boolean;
    indexSource: boolean | null;
    interestRateIndexValue: boolean;
    interestRateIndexValueSpecified: boolean;
    interestRateIndex: boolean | null;
    typeValue: boolean;
    typeValueSpecified: boolean;
    type: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}