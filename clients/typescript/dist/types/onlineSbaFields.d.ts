import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineSbaFields {
    acctToAcctTransferGlCodeValue: boolean;
    acctToAcctTransferGlCodeValueSpecified: boolean;
    acctToAcctTransferGlCode: boolean | null;
    branchAddressFormatValue: boolean;
    branchAddressFormatValueSpecified: boolean;
    branchAddressFormat: boolean | null;
    itcHoldTypeDefaultValue: boolean;
    itcHoldTypeDefaultValueSpecified: boolean;
    itcHoldTypeDefault: boolean | null;
    transactionLimitValue: boolean;
    transactionLimitValueSpecified: boolean;
    transactionLimit: boolean | null;
    trnsonOwnInstitutionValue: boolean;
    trnsonOwnInstitutionValueSpecified: boolean;
    trnsonOwnInstitution: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
