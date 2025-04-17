import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PmtAppMethodSingleSelectableFields } from "./pmtAppMethodSingleSelectableFields";
import { VersionType } from "./versionType";

export interface PmtAppMethodPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PmtAppMethodSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}