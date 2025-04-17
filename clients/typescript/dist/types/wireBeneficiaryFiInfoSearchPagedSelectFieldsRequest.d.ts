import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireBeneficiaryFiInfoSingleSelectableFields } from "./wireBeneficiaryFiInfoSingleSelectableFields";
import { WireBeneficiaryFiInfoSearchFilter } from "./wireBeneficiaryFiInfoSearchFilter";
import { VersionType } from "./versionType";
export interface WireBeneficiaryFiInfoSearchPagedSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireBeneficiaryFiInfoSingleSelectableFields;
    searchFilter: WireBeneficiaryFiInfoSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
