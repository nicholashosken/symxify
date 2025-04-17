import { WdFeeRelCodeList } from "./wdFeeRelCodeList";
import { WdFeeRelationFeeAmount } from "./wdFeeRelationFeeAmount";
import { WdFeeRelationSourceCodeList } from "./wdFeeRelationSourceCodeList";
import { WdFeeRelationWithdrawalLimit } from "./wdFeeRelationWithdrawalLimit";
import { VersionType } from "./versionType";
export interface WdFee {
    feeDescription: string;
    feeGlCode: number | null;
    relCodeList: WdFeeRelCodeList[];
    relationFeeAmount: WdFeeRelationFeeAmount[];
    relationSourceCodeList: WdFeeRelationSourceCodeList[];
    relationWithdrawalLimit: WdFeeRelationWithdrawalLimit[];
    withdrawalFeeType: number | null;
    version1: VersionType;
}
