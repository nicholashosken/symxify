import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PlanDefaultFields_2 } from "./planDefaultFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdatePlanDefaultByIdRequest {
    planDefaultReservePlanTypeValue: number;
    planDefaultReservePlanTypeValueSpecified: boolean;
    planDefaultReservePlanType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    planDefaultFields: PlanDefaultFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
