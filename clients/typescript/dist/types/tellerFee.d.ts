import { TellerFeeRelCodeList } from "./tellerFeeRelCodeList";
import { TellerFeeRelSvLnTypes } from "./tellerFeeRelSvLnTypes";
import { TellerFeeRelationBaseAmount } from "./tellerFeeRelationBaseAmount";
import { TellerFeeRelationBaseCount } from "./tellerFeeRelationBaseCount";
import { TellerFeeRelationFeeAmount } from "./tellerFeeRelationFeeAmount";
import { VersionType } from "./versionType";
export interface TellerFee {
    calculationType: number | null;
    feeDescription: string;
    feeGlCode: number | null;
    relCodeList: TellerFeeRelCodeList[];
    relSvLnTypes: TellerFeeRelSvLnTypes[];
    relationBaseAmount: TellerFeeRelationBaseAmount[];
    relationBaseCount: TellerFeeRelationBaseCount[];
    relationFeeAmount: TellerFeeRelationFeeAmount[];
    tellerTransactionFeeType: number | null;
    version1: VersionType;
}
