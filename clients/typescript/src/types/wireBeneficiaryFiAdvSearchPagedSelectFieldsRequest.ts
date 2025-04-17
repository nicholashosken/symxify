import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireBeneficiaryFiAdvSingleSelectableFields } from "./wireBeneficiaryFiAdvSingleSelectableFields";
import { WireBeneficiaryFiAdvSearchFilter } from "./wireBeneficiaryFiAdvSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireBeneficiaryFiAdvSearchPagedSelectFieldsRequest {
    wireSequenceNumberValue: number;
    wireSequenceNumberValueSpecified: boolean;
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireBeneficiaryFiAdvSingleSelectableFields;
    searchFilter: WireBeneficiaryFiAdvSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}