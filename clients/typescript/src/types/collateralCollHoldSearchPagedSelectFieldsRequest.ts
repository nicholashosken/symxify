import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CollateralCollHoldSingleSelectableFields } from "./collateralCollHoldSingleSelectableFields";
import { CollateralCollHoldSearchFilter } from "./collateralCollHoldSearchFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CollateralCollHoldSearchPagedSelectFieldsRequest {
    collateralNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CollateralCollHoldSingleSelectableFields;
    searchFilter: CollateralCollHoldSearchFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}