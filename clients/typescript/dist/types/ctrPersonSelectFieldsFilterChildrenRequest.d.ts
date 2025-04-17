import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrPersonSelectableFields } from "./ctrPersonSelectableFields";
import { CtrPersonChildrenFilter } from "./ctrPersonChildrenFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrPersonSelectFieldsFilterChildrenRequest {
    ctrNumber: string;
    ctrPersonLocatorValue: number;
    ctrPersonLocatorValueSpecified: boolean;
    ctrPersonLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CtrPersonSelectableFields;
    childrenSearchFilter: CtrPersonChildrenFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
