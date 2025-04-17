import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { MbrAddressSelectableFields } from "./mbrAddressSelectableFields";
import { MbrAddressChildrenFilter } from "./mbrAddressChildrenFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface MbrAddressSelectFieldsFilterChildrenRequest {
    mbrAddressMbrAddrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: MbrAddressSelectableFields;
    childrenSearchFilter: MbrAddressChildrenFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}