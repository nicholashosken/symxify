import { FeeTypeType } from "./feeTypeType";

export interface TransactionFee {
    feeValue: number;
    feeValueSpecified: boolean;
    fee: number | null;
    typeValue: FeeTypeType;
    typeValueSpecified: boolean;
    type: FeeTypeType | null;
}