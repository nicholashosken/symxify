import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrSelectableFields } from "./ctrSelectableFields";
import { CtrChildrenFilter } from "./ctrChildrenFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrSelectFieldsFilterChildrenRequest {
    ctrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CtrSelectableFields;
    childrenSearchFilter: CtrChildrenFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
