import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireReceiverFiInfoSingleSelectableFields } from "./wireReceiverFiInfoSingleSelectableFields";
import { WireReceiverFiInfoSearchFilter } from "./wireReceiverFiInfoSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireReceiverFiInfoSearchPagedSelectFieldsRequest {
    wireSequenceNumberValue: number;
    wireSequenceNumberValueSpecified: boolean;
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireReceiverFiInfoSingleSelectableFields;
    searchFilter: WireReceiverFiInfoSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
