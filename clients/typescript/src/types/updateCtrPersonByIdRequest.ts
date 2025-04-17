import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrPersonFields_2 } from "./ctrPersonFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateCtrPersonByIdRequest {
    ctrNumber: string;
    ctrPersonLocatorValue: number;
    ctrPersonLocatorValueSpecified: boolean;
    ctrPersonLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    ctrPersonFields: CtrPersonFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}