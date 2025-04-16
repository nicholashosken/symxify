import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppEscrowSingleSelectableFields } from "./loanAppEscrowSingleSelectableFields";
import { LoanAppEscrowSearchFilter } from "./loanAppEscrowSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppEscrowSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanAppId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppEscrowSingleSelectableFields;
    searchFilter: LoanAppEscrowSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
