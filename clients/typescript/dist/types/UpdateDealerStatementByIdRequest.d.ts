import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DealerStatementFields_2 } from "./dealerStatementFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateDealerStatementByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    dealerStatementFields: DealerStatementFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
