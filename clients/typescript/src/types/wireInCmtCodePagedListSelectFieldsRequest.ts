import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireInCmtCodeSingleSelectableFields } from "./wireInCmtCodeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireInCmtCodePagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireInCmtCodeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}