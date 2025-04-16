import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DebtRatioFields_2 } from "./debtRatioFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateDebtRatioByIdRequest {
    debtRatioTypeValue: number;
    debtRatioTypeValueSpecified: boolean;
    debtRatioType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    debtRatioFields: DebtRatioFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
