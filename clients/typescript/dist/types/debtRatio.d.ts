import { DebtRatioFieldNo } from "./debtRatioFieldNo";
import { DebtRatioFieldUse } from "./debtRatioFieldUse";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DebtRatio {
    fieldNo: DebtRatioFieldNo[];
    fieldNoSpecified: boolean;
    fieldUse: DebtRatioFieldUse[];
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
