import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollateralSelectableFields } from "./collateralSelectableFields";
import { CollateralChildrenFilter } from "./collateralChildrenFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollateralSelectFieldsFilterChildrenRequest {
    collateralNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CollateralSelectableFields;
    childrenSearchFilter: CollateralChildrenFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
