import { PayCalcFields_2 } from "./payCalcFields_2";

export interface PayCalcUpdateRequest {
    payCalcPaymentCalculationTypeValue: number;
    payCalcPaymentCalculationTypeValueSpecified: boolean;
    payCalcPaymentCalculationType: number | null;
    payCalcFields: PayCalcFields_2;
}