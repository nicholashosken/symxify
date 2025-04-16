import { WdFeeFields_2 } from "./wdFeeFields_2";

export interface WdFeeUpdateRequest {
    wdFeeWithdrawalFeeTypeValue: number;
    wdFeeWithdrawalFeeTypeValueSpecified: boolean;
    wdFeeWithdrawalFeeType: number | null;
    wdFeeFields: WdFeeFields_2;
}