import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireOfacDetailsSingleSelectableFields } from "./wireOfacDetailsSingleSelectableFields";
import { WireOfacDetailsSearchFilter } from "./wireOfacDetailsSearchFilter";
import { VersionType } from "./versionType";

export interface WireOfacDetailsSearchPagedSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireOfacDetailsSingleSelectableFields;
    searchFilter: WireOfacDetailsSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}