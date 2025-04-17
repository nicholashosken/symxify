import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireFiToFiInfoSingleSelectableFields } from "./wireFiToFiInfoSingleSelectableFields";
import { WireFiToFiInfoSearchFilter } from "./wireFiToFiInfoSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireFiToFiInfoSearchPagedSelectFieldsRequest {
    wireSequenceNumberValue: number;
    wireSequenceNumberValueSpecified: boolean;
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireFiToFiInfoSingleSelectableFields;
    searchFilter: WireFiToFiInfoSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}