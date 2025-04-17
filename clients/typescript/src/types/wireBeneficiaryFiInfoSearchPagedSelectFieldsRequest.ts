import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireBeneficiaryFiInfoSingleSelectableFields } from "./wireBeneficiaryFiInfoSingleSelectableFields";
import { WireBeneficiaryFiInfoSearchFilter } from "./wireBeneficiaryFiInfoSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireBeneficiaryFiInfoSearchPagedSelectFieldsRequest {
    wireSequenceNumberValue: number;
    wireSequenceNumberValueSpecified: boolean;
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireBeneficiaryFiInfoSingleSelectableFields;
    searchFilter: WireBeneficiaryFiInfoSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}