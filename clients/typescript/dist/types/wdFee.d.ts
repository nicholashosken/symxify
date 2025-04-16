import { WdFeeRelCodeList } from "./wdFeeRelCodeList";
import { WdFeeRelationFeeAmount } from "./wdFeeRelationFeeAmount";
import { WdFeeRelationSourceCodeList } from "./wdFeeRelationSourceCodeList";
import { WdFeeRelationWithdrawalLimit } from "./wdFeeRelationWithdrawalLimit";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WdFee {
    feeDescription: string;
    feeGlCodeValue: number;
    feeGlCodeValueSpecified: boolean;
    feeGlCode: number | null;
    relCodeList: WdFeeRelCodeList[];
    relCodeListSpecified: boolean;
    relationFeeAmount: WdFeeRelationFeeAmount[];
    relationFeeAmountSpecified: boolean;
    relationSourceCodeList: WdFeeRelationSourceCodeList[];
    relationSourceCodeListSpecified: boolean;
    relationWithdrawalLimit: WdFeeRelationWithdrawalLimit[];
    relationWithdrawalLimitSpecified: boolean;
    withdrawalFeeTypeValue: number;
    withdrawalFeeTypeValueSpecified: boolean;
    withdrawalFeeType: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
