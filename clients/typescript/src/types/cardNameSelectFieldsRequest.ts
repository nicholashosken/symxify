import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CardNameSingleSelectableFields } from "./cardNameSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CardNameSelectFieldsRequest {
    accountNumber: string;
    cardLocatorValue: number;
    cardLocatorValueSpecified: boolean;
    cardLocator: number | null;
    cardNameLocatorValue: number;
    cardNameLocatorValueSpecified: boolean;
    cardNameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CardNameSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}