import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PayCalcSingleSelectableFields } from "./payCalcSingleSelectableFields";
import { VersionType } from "./versionType";

export interface PayCalcPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PayCalcSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}