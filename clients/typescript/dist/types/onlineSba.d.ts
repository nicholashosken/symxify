import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineSba {
    acctToAcctTransferGlCodeValue: number;
    acctToAcctTransferGlCodeValueSpecified: boolean;
    acctToAcctTransferGlCode: number | null;
    branchAddressFormatValue: number;
    branchAddressFormatValueSpecified: boolean;
    branchAddressFormat: number | null;
    itcHoldTypeDefaultValue: number;
    itcHoldTypeDefaultValueSpecified: boolean;
    itcHoldTypeDefault: number | null;
    transactionLimitValue: number;
    transactionLimitValueSpecified: boolean;
    transactionLimit: number | null;
    trnsonOwnInstitutionValue: number;
    trnsonOwnInstitutionValueSpecified: boolean;
    trnsonOwnInstitution: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
