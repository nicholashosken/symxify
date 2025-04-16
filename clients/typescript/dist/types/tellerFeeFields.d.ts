import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface TellerFeeFields {
    calculationTypeValue: boolean;
    calculationTypeValueSpecified: boolean;
    calculationType: boolean | null;
    feeDescriptionValue: boolean;
    feeDescriptionValueSpecified: boolean;
    feeDescription: boolean | null;
    feeGlCodeValue: boolean;
    feeGlCodeValueSpecified: boolean;
    feeGlCode: boolean | null;
    relCodeList: number[];
    relCodeListSpecified: boolean;
    relSvLnTypes: number[];
    relSvLnTypesSpecified: boolean;
    relationBaseAmount: number[];
    relationBaseAmountSpecified: boolean;
    relationBaseCount: number[];
    relationBaseCountSpecified: boolean;
    relationFeeAmount: number[];
    relationFeeAmountSpecified: boolean;
    tellerTransactionFeeTypeValue: boolean;
    tellerTransactionFeeTypeValueSpecified: boolean;
    tellerTransactionFeeType: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
