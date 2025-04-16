import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { StmtMessagesSingleSelectableFields } from "./stmtMessagesSingleSelectableFields";
import { StmtMessagesSearchFilter } from "./stmtMessagesSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface StmtMessagesSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: StmtMessagesSingleSelectableFields;
    searchFilter: StmtMessagesSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}