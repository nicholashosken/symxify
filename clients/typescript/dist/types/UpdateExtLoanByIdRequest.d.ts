import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExtLoanFields_2 } from "./extLoanFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateExtLoanByIdRequest {
    extLoanProcessorValue: number;
    extLoanProcessorValueSpecified: boolean;
    extLoanProcessor: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    extLoanFields: ExtLoanFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
