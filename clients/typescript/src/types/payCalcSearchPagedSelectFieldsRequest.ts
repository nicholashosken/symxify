import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PayCalcSingleSelectableFields } from "./payCalcSingleSelectableFields";
import { PayCalcSearchFilter } from "./payCalcSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PayCalcSearchPagedSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PayCalcSingleSelectableFields;
    searchFilter: PayCalcSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}