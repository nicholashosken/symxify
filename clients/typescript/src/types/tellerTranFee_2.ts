import { TellerTranFeeRelCodeList_2 } from "./tellerTranFeeRelCodeList_2";
import { TellerTranFeeRelationFeeAmount_2 } from "./tellerTranFeeRelationFeeAmount_2";
import { VersionType } from "./versionType";

export interface TellerTranFee_2 {
    calculationType: number | null;
    feeCode: number | null;
    feeOption: number | null;
    relCodeList: TellerTranFeeRelCodeList_2[];
    relationFeeAmount: TellerTranFeeRelationFeeAmount_2[];
    typeCode: number | null;
    version1: VersionType;
}