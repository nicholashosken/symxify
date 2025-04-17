import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { ExcpAddInfoSingleSelectableFields } from "./excpAddInfoSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExcpAddInfoPagedListSelectFieldsRequest {
    excpItemGlobalSequenceDateValue: string;
    excpItemGlobalSequenceDateValueSpecified: boolean;
    excpItemGlobalSequenceDate: string | null;
    excpItemGlobalSequenceValue: number;
    excpItemGlobalSequenceValueSpecified: boolean;
    excpItemGlobalSequence: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: ExcpAddInfoSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}