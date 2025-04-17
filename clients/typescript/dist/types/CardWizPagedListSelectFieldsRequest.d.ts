import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CardWizSingleSelectableFields } from "./cardWizSingleSelectableFields";
import { VersionType } from "./versionType";
export interface CardWizPagedListSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CardWizSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
