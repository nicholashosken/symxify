import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { StockFields_2 } from "./stockFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateStockByIdRequest {
    stockTypeValue: number;
    stockTypeValueSpecified: boolean;
    stockType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    stockFields: StockFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}