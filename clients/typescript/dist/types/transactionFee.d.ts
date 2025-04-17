import { FeeTypeType } from "./feeTypeType";
export interface TransactionFee {
    fee: number | null;
    type: FeeTypeType | null;
}
