import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { EftTransferSingleSelectableFields } from "./eftTransferSingleSelectableFields";
import { EftTransferSearchFilter } from "./eftTransferSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface EftTransferSearchPagedSelectFieldsRequest {
    accountNumber: string;
    eftLocatorValue: number;
    eftLocatorValueSpecified: boolean;
    eftLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: EftTransferSingleSelectableFields;
    searchFilter: EftTransferSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}