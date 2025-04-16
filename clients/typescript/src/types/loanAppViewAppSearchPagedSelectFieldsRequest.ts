import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { LoanAppViewAppSingleSelectableFields } from "./loanAppViewAppSingleSelectableFields";
import { LoanAppViewAppSearchFilter } from "./loanAppViewAppSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppViewAppSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: LoanAppViewAppSingleSelectableFields;
    searchFilter: LoanAppViewAppSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}