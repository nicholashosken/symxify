import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DealerCommentSingleSelectableFields } from "./dealerCommentSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DealerCommentSelectFieldsRequest {
    dealerNumber: string;
    dealerCommentLocatorValue: number;
    dealerCommentLocatorValueSpecified: boolean;
    dealerCommentLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: DealerCommentSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
