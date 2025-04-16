import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareCheckOrderSingleSelectableFields } from "./shareCheckOrderSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareCheckOrderSelectFieldsRequest {
    accountNumber: string;
    shareId: string;
    shareCheckOrderLocatorValue: number;
    shareCheckOrderLocatorValueSpecified: boolean;
    shareCheckOrderLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ShareCheckOrderSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
