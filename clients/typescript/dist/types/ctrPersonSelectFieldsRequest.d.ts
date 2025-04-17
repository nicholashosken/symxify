import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrPersonSingleSelectableFields } from "./ctrPersonSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CtrPersonSelectFieldsRequest {
    ctrNumber: string;
    ctrPersonLocatorValue: number;
    ctrPersonLocatorValueSpecified: boolean;
    ctrPersonLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CtrPersonSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
