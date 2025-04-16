import { TellerFeeFields_2 } from "./tellerFeeFields_2";

export interface TellerFeeUpdateRequest {
    tellerFeeTellerTransactionFeeTypeValue: number;
    tellerFeeTellerTransactionFeeTypeValueSpecified: boolean;
    tellerFeeTellerTransactionFeeType: number | null;
    tellerFeeFields: TellerFeeFields_2;
}