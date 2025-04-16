import { DebtRatioFieldNo_2 } from "./debtRatioFieldNo_2";
import { DebtRatioFieldUse_2 } from "./debtRatioFieldUse_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DebtRatio_2 {
    fieldNo: DebtRatioFieldNo_2[];
    fieldNoSpecified: boolean;
    fieldUse: DebtRatioFieldUse_2[];
    fieldUseSpecified: boolean;
    payFactorValue: number;
    payFactorValueSpecified: boolean;
    payFactor: number | null;
    payUseCodeValue: number;
    payUseCodeValueSpecified: boolean;
    payUseCode: number | null;
    typeValue: number;
    typeValueSpecified: boolean;
    type: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}