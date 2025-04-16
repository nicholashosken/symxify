import { TellerFeeRelCodeList_2 } from "./tellerFeeRelCodeList_2";
import { TellerFeeRelSvLnTypes_2 } from "./tellerFeeRelSvLnTypes_2";
import { TellerFeeRelationBaseAmount_2 } from "./tellerFeeRelationBaseAmount_2";
import { TellerFeeRelationBaseCount_2 } from "./tellerFeeRelationBaseCount_2";
import { TellerFeeRelationFeeAmount_2 } from "./tellerFeeRelationFeeAmount_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface TellerFee_2 {
    calculationTypeValue: number;
    calculationTypeValueSpecified: boolean;
    calculationType: number | null;
    feeDescription: string;
    feeGlCodeValue: number;
    feeGlCodeValueSpecified: boolean;
    feeGlCode: number | null;
    relCodeList: TellerFeeRelCodeList_2[];
    relCodeListSpecified: boolean;
    relSvLnTypes: TellerFeeRelSvLnTypes_2[];
    relSvLnTypesSpecified: boolean;
    relationBaseAmount: TellerFeeRelationBaseAmount_2[];
    relationBaseAmountSpecified: boolean;
    relationBaseCount: TellerFeeRelationBaseCount_2[];
    relationBaseCountSpecified: boolean;
    relationFeeAmount: TellerFeeRelationFeeAmount_2[];
    relationFeeAmountSpecified: boolean;
    tellerTransactionFeeTypeValue: number;
    tellerTransactionFeeTypeValueSpecified: boolean;
    tellerTransactionFeeType: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}