import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ReservePlanLoanSingleSelectableFields } from "./reservePlanLoanSingleSelectableFields";
import { ReservePlanLoanSearchFilter } from "./reservePlanLoanSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ReservePlanLoanSearchPagedSelectFieldsRequest {
    dealerNumber: string;
    reservePlanId: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ReservePlanLoanSingleSelectableFields;
    searchFilter: ReservePlanLoanSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
