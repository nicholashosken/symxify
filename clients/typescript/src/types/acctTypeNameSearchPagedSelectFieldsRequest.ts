import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { AcctTypeNameSingleSelectableFields } from "./acctTypeNameSingleSelectableFields";
import { AcctTypeNameSearchFilter } from "./acctTypeNameSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcctTypeNameSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: AcctTypeNameSingleSelectableFields;
    searchFilter: AcctTypeNameSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}