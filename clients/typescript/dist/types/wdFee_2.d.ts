import { WdFeeRelCodeList_2 } from "./wdFeeRelCodeList_2";
import { WdFeeRelationFeeAmount_2 } from "./wdFeeRelationFeeAmount_2";
import { WdFeeRelationSourceCodeList_2 } from "./wdFeeRelationSourceCodeList_2";
import { WdFeeRelationWithdrawalLimit_2 } from "./wdFeeRelationWithdrawalLimit_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WdFee_2 {
    feeDescription: string;
    feeGlCodeValue: number;
    feeGlCodeValueSpecified: boolean;
    feeGlCode: number | null;
    relCodeList: WdFeeRelCodeList_2[];
    relCodeListSpecified: boolean;
    relationFeeAmount: WdFeeRelationFeeAmount_2[];
    relationFeeAmountSpecified: boolean;
    relationSourceCodeList: WdFeeRelationSourceCodeList_2[];
    relationSourceCodeListSpecified: boolean;
    relationWithdrawalLimit: WdFeeRelationWithdrawalLimit_2[];
    relationWithdrawalLimitSpecified: boolean;
    withdrawalFeeTypeValue: number;
    withdrawalFeeTypeValueSpecified: boolean;
    withdrawalFeeType: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
