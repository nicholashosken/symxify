import { TellerTranFeeRelCodeList } from "./tellerTranFeeRelCodeList";
import { TellerTranFeeRelationFeeAmount } from "./tellerTranFeeRelationFeeAmount";
import { VersionType } from "./versionType";

export interface TellerTranFee {
    calculationType: number | null;
    feeCode: number | null;
    feeOption: number | null;
    relCodeList: TellerTranFeeRelCodeList[];
    relationFeeAmount: TellerTranFeeRelationFeeAmount[];
    typeCode: number | null;
    version1: VersionType;
}