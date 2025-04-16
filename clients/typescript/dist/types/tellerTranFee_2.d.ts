import { TellerTranFeeRelCodeList_2 } from "./tellerTranFeeRelCodeList_2";
import { TellerTranFeeRelationFeeAmount_2 } from "./tellerTranFeeRelationFeeAmount_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface TellerTranFee_2 {
    calculationTypeValue: number;
    calculationTypeValueSpecified: boolean;
    calculationType: number | null;
    feeCodeValue: number;
    feeCodeValueSpecified: boolean;
    feeCode: number | null;
    feeOptionValue: number;
    feeOptionValueSpecified: boolean;
    feeOption: number | null;
    relCodeList: TellerTranFeeRelCodeList_2[];
    relCodeListSpecified: boolean;
    relationFeeAmount: TellerTranFeeRelationFeeAmount_2[];
    relationFeeAmountSpecified: boolean;
    typeCodeValue: number;
    typeCodeValueSpecified: boolean;
    typeCode: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
