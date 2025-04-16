import { TellerTranFeeRelCodeList } from "./tellerTranFeeRelCodeList";
import { TellerTranFeeRelationFeeAmount } from "./tellerTranFeeRelationFeeAmount";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface TellerTranFee {
    calculationTypeValue: number;
    calculationTypeValueSpecified: boolean;
    calculationType: number | null;
    feeCodeValue: number;
    feeCodeValueSpecified: boolean;
    feeCode: number | null;
    feeOptionValue: number;
    feeOptionValueSpecified: boolean;
    feeOption: number | null;
    relCodeList: TellerTranFeeRelCodeList[];
    relCodeListSpecified: boolean;
    relationFeeAmount: TellerTranFeeRelationFeeAmount[];
    relationFeeAmountSpecified: boolean;
    typeCodeValue: number;
    typeCodeValueSpecified: boolean;
    typeCode: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}