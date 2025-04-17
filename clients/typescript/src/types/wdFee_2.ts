import { WdFeeRelCodeList_2 } from "./wdFeeRelCodeList_2";
import { WdFeeRelationFeeAmount_2 } from "./wdFeeRelationFeeAmount_2";
import { WdFeeRelationSourceCodeList_2 } from "./wdFeeRelationSourceCodeList_2";
import { WdFeeRelationWithdrawalLimit_2 } from "./wdFeeRelationWithdrawalLimit_2";
import { VersionType } from "./versionType";

export interface WdFee_2 {
    feeDescription: string;
    feeGlCode: number | null;
    relCodeList: WdFeeRelCodeList_2[];
    relationFeeAmount: WdFeeRelationFeeAmount_2[];
    relationSourceCodeList: WdFeeRelationSourceCodeList_2[];
    relationWithdrawalLimit: WdFeeRelationWithdrawalLimit_2[];
    withdrawalFeeType: number | null;
    version1: VersionType;
}