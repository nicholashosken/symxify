import { TellerFeeRelCodeList } from "./tellerFeeRelCodeList";
import { TellerFeeRelSvLnTypes } from "./tellerFeeRelSvLnTypes";
import { TellerFeeRelationBaseAmount } from "./tellerFeeRelationBaseAmount";
import { TellerFeeRelationBaseCount } from "./tellerFeeRelationBaseCount";
import { TellerFeeRelationFeeAmount } from "./tellerFeeRelationFeeAmount";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface TellerFee {
    calculationTypeValue: number;
    calculationTypeValueSpecified: boolean;
    calculationType: number | null;
    feeDescription: string;
    feeGlCodeValue: number;
    feeGlCodeValueSpecified: boolean;
    feeGlCode: number | null;
    relCodeList: TellerFeeRelCodeList[];
    relCodeListSpecified: boolean;
    relSvLnTypes: TellerFeeRelSvLnTypes[];
    relSvLnTypesSpecified: boolean;
    relationBaseAmount: TellerFeeRelationBaseAmount[];
    relationBaseAmountSpecified: boolean;
    relationBaseCount: TellerFeeRelationBaseCount[];
    relationBaseCountSpecified: boolean;
    relationFeeAmount: TellerFeeRelationFeeAmount[];
    relationFeeAmountSpecified: boolean;
    tellerTransactionFeeTypeValue: number;
    tellerTransactionFeeTypeValueSpecified: boolean;
    tellerTransactionFeeType: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}