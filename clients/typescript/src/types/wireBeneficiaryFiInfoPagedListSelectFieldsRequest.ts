import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireBeneficiaryFiInfoSingleSelectableFields } from "./wireBeneficiaryFiInfoSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WireBeneficiaryFiInfoPagedListSelectFieldsRequest {
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireBeneficiaryFiInfoSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}