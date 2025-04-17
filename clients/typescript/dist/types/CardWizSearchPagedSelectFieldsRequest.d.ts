import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CardWizSingleSelectableFields } from "./cardWizSingleSelectableFields";
import { CardWizSearchFilter } from "./cardWizSearchFilter";
import { VersionType } from "./versionType";
export interface CardWizSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CardWizSingleSelectableFields;
    searchFilter: CardWizSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
