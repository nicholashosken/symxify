import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanPledgeSingleSelectableFields } from "./loanPledgeSingleSelectableFields";
import { LoanPledgeSearchFilter } from "./loanPledgeSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanPledgeSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanPledgeSingleSelectableFields;
    searchFilter: LoanPledgeSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
