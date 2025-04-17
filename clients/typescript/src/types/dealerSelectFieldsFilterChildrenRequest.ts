import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DealerSelectableFields } from "./dealerSelectableFields";
import { DealerChildrenFilter } from "./dealerChildrenFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DealerSelectFieldsFilterChildrenRequest {
    dealerNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: DealerSelectableFields;
    childrenSearchFilter: DealerChildrenFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}