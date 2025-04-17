import { TellerTranFeeFields_2 } from "./tellerTranFeeFields_2";

export interface TellerTranFeeUpdateRequest {
    tellerTranFeeFeeCode: number | null;
    tellerTranFeeTypeCode: number | null;
    tellerTranFeeFields: TellerTranFeeFields_2;
}