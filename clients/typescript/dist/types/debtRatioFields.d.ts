import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DebtRatioFields {
    fieldNo: number[];
    fieldNoSpecified: boolean;
    fieldUse: number[];
    fieldUseSpecified: boolean;
    payFactorValue: boolean;
    payFactorValueSpecified: boolean;
    payFactor: boolean | null;
    payUseCodeValue: boolean;
    payUseCodeValueSpecified: boolean;
    payUseCode: boolean | null;
    typeValue: boolean;
    typeValueSpecified: boolean;
    type: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
