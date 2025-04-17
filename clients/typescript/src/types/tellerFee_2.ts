import { TellerFeeRelCodeList_2 } from "./tellerFeeRelCodeList_2";
import { TellerFeeRelSvLnTypes_2 } from "./tellerFeeRelSvLnTypes_2";
import { TellerFeeRelationBaseAmount_2 } from "./tellerFeeRelationBaseAmount_2";
import { TellerFeeRelationBaseCount_2 } from "./tellerFeeRelationBaseCount_2";
import { TellerFeeRelationFeeAmount_2 } from "./tellerFeeRelationFeeAmount_2";
import { VersionType } from "./versionType";

export interface TellerFee_2 {
    calculationType: number | null;
    feeDescription: string;
    feeGlCode: number | null;
    relCodeList: TellerFeeRelCodeList_2[];
    relSvLnTypes: TellerFeeRelSvLnTypes_2[];
    relationBaseAmount: TellerFeeRelationBaseAmount_2[];
    relationBaseCount: TellerFeeRelationBaseCount_2[];
    relationFeeAmount: TellerFeeRelationFeeAmount_2[];
    tellerTransactionFeeType: number | null;
    version1: VersionType;
}