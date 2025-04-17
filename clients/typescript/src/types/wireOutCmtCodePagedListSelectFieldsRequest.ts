import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireOutCmtCodeSingleSelectableFields } from "./wireOutCmtCodeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireOutCmtCodePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireOutCmtCodeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}