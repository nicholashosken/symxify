import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CardDefaultSingleSelectableFields } from "./cardDefaultSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CardDefaultPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CardDefaultSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}