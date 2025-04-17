import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireServiceMessageSingleSelectableFields } from "./wireServiceMessageSingleSelectableFields";
import { WireServiceMessageSearchFilter } from "./wireServiceMessageSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireServiceMessageSearchPagedSelectFieldsRequest {
    wireSequenceNumberValue: number;
    wireSequenceNumberValueSpecified: boolean;
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireServiceMessageSingleSelectableFields;
    searchFilter: WireServiceMessageSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
