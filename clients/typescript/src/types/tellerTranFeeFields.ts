import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface TellerTranFeeFields {
    calculationTypeValue: boolean;
    calculationTypeValueSpecified: boolean;
    calculationType: boolean | null;
    feeCodeValue: boolean;
    feeCodeValueSpecified: boolean;
    feeCode: boolean | null;
    feeOptionValue: boolean;
    feeOptionValueSpecified: boolean;
    feeOption: boolean | null;
    relCodeList: number[];
    relCodeListSpecified: boolean;
    relationFeeAmount: number[];
    relationFeeAmountSpecified: boolean;
    typeCodeValue: boolean;
    typeCodeValueSpecified: boolean;
    typeCode: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}