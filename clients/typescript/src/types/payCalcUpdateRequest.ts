import { PayCalcFields_2 } from "./payCalcFields_2";

export interface PayCalcUpdateRequest {
    payCalcPaymentCalculationType: number | null;
    payCalcFields: PayCalcFields_2;
}