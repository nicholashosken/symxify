import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireBeneficiaryInfoSingleSelectableFields } from "./wireBeneficiaryInfoSingleSelectableFields";
import { WireBeneficiaryInfoSearchFilter } from "./wireBeneficiaryInfoSearchFilter";
import { VersionType } from "./versionType";
export interface WireBeneficiaryInfoSearchPagedSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireBeneficiaryInfoSingleSelectableFields;
    searchFilter: WireBeneficiaryInfoSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
