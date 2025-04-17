import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NonAcctNameSelectableFields } from "./nonAcctNameSelectableFields";
import { NonAcctNameChildrenFilter } from "./nonAcctNameChildrenFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface NonAcctNameSelectFieldsFilterChildrenRequest {
    nonAcctNameNonAcctNameNum: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: NonAcctNameSelectableFields;
    childrenSearchFilter: NonAcctNameChildrenFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}