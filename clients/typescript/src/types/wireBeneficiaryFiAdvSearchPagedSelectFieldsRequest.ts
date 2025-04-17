import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireBeneficiaryFiAdvSingleSelectableFields } from "./wireBeneficiaryFiAdvSingleSelectableFields";
import { WireBeneficiaryFiAdvSearchFilter } from "./wireBeneficiaryFiAdvSearchFilter";
import { VersionType } from "./versionType";

export interface WireBeneficiaryFiAdvSearchPagedSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireBeneficiaryFiAdvSingleSelectableFields;
    searchFilter: WireBeneficiaryFiAdvSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}