import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { WireDrawdownDebitAcctAdvSingleSelectableFields } from "./wireDrawdownDebitAcctAdvSingleSelectableFields";
import { WireDrawdownDebitAcctAdvSearchFilter } from "./wireDrawdownDebitAcctAdvSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireDrawdownDebitAcctAdvSearchPagedSelectFieldsRequest {
    wireSequenceNumberValue: number;
    wireSequenceNumberValueSpecified: boolean;
    wireSequenceNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: WireDrawdownDebitAcctAdvSingleSelectableFields;
    searchFilter: WireDrawdownDebitAcctAdvSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}