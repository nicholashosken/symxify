import { TellerTranFeeFields_2 } from "./tellerTranFeeFields_2";
export interface TellerTranFeeUpdateRequest {
    tellerTranFeeFeeCodeValue: number;
    tellerTranFeeFeeCodeValueSpecified: boolean;
    tellerTranFeeFeeCode: number | null;
    tellerTranFeeTypeCodeValue: number;
    tellerTranFeeTypeCodeValueSpecified: boolean;
    tellerTranFeeTypeCode: number | null;
    tellerTranFeeFields: TellerTranFeeFields_2;
}
