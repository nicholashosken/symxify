import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrPersonCtrTranInfoFields_2 } from "./ctrPersonCtrTranInfoFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateCtrPersonCtrTranInfoByIdRequest {
    ctrNumber: string;
    ctrPersonLocatorValue: number;
    ctrPersonLocatorValueSpecified: boolean;
    ctrPersonLocator: number | null;
    ctrPersonCtrTranInfoLocatorValue: number;
    ctrPersonCtrTranInfoLocatorValueSpecified: boolean;
    ctrPersonCtrTranInfoLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    ctrPersonCtrTranInfoFields: CtrPersonCtrTranInfoFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}