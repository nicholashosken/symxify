import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LateChgFields {
    addLateChargetoPmtValue: boolean;
    addLateChargetoPmtValueSpecified: boolean;
    addLateChargetoPmt: boolean | null;
    additionalFlatFeeValue: boolean;
    additionalFlatFeeValueSpecified: boolean;
    additionalFlatFee: boolean | null;
    includeEscrowAmountValue: boolean;
    includeEscrowAmountValueSpecified: boolean;
    includeEscrowAmount: boolean | null;
    lateChargeFormulaValue: boolean;
    lateChargeFormulaValueSpecified: boolean;
    lateChargeFormula: boolean | null;
    lateChargeGraceDaysValue: boolean;
    lateChargeGraceDaysValueSpecified: boolean;
    lateChargeGraceDays: boolean | null;
    lateChargeMaximumValue: boolean;
    lateChargeMaximumValueSpecified: boolean;
    lateChargeMaximum: boolean | null;
    lateChargeMinimumValue: boolean;
    lateChargeMinimumValueSpecified: boolean;
    lateChargeMinimum: boolean | null;
    lateChargeRateValue: boolean;
    lateChargeRateValueSpecified: boolean;
    lateChargeRate: boolean | null;
    lateChargeTypeValue: boolean;
    lateChargeTypeValueSpecified: boolean;
    lateChargeType: boolean | null;
    subformatValue: boolean;
    subformatValueSpecified: boolean;
    subformat: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}