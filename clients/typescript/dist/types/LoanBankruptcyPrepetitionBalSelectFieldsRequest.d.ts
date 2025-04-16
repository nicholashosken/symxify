import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LoanBankruptcyPrepetitionBalSingleSelectableFields } from "./loanBankruptcyPrepetitionBalSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanBankruptcyPrepetitionBalSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanBankruptcyId: string;
    loanBankruptcyPrepetitionBalId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: LoanBankruptcyPrepetitionBalSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
