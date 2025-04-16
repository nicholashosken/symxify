import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanPledgeNameSingleSelectableFields } from "./loanPledgeNameSingleSelectableFields";
import { LoanPledgeNameSearchFilter } from "./loanPledgeNameSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanPledgeNameSearchPagedSelectFieldsRequest {
    accountNumber: string;
    loanId: string;
    loanPledgeLocatorValue: number;
    loanPledgeLocatorValueSpecified: boolean;
    loanPledgeLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanPledgeNameSingleSelectableFields;
    searchFilter: LoanPledgeNameSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}