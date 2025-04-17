import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { CollateralDocumentTrackingSingleSelectableFields } from "./collateralDocumentTrackingSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CollateralDocumentTrackingPagedListSelectFieldsRequest {
    collateralNumber: string;
    collateralDocumentLocatorValue: number;
    collateralDocumentLocatorValueSpecified: boolean;
    collateralDocumentLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: CollateralDocumentTrackingSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}