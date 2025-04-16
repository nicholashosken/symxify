import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WdFeeFields {
    feeDescriptionValue: boolean;
    feeDescriptionValueSpecified: boolean;
    feeDescription: boolean | null;
    feeGlCodeValue: boolean;
    feeGlCodeValueSpecified: boolean;
    feeGlCode: boolean | null;
    relCodeList: number[];
    relCodeListSpecified: boolean;
    relationFeeAmount: number[];
    relationFeeAmountSpecified: boolean;
    relationSourceCodeList: number[];
    relationSourceCodeListSpecified: boolean;
    relationWithdrawalLimit: number[];
    relationWithdrawalLimitSpecified: boolean;
    withdrawalFeeTypeValue: boolean;
    withdrawalFeeTypeValueSpecified: boolean;
    withdrawalFeeType: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}