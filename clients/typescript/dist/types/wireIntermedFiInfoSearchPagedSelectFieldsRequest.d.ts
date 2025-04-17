import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireIntermedFiInfoSingleSelectableFields } from "./wireIntermedFiInfoSingleSelectableFields";
import { WireIntermedFiInfoSearchFilter } from "./wireIntermedFiInfoSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireIntermedFiInfoSearchPagedSelectFieldsRequest {
    wireSequenceNumberValue: number;
    wireSequenceNumberValueSpecified: boolean;
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireIntermedFiInfoSingleSelectableFields;
    searchFilter: WireIntermedFiInfoSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
