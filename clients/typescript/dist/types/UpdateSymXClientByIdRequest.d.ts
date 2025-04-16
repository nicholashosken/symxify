import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SymXClientFields_2 } from "./symXClientFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateSymXClientByIdRequest {
    symXClientInstanceIdValue: number;
    symXClientInstanceIdValueSpecified: boolean;
    symXClientInstanceId: number | null;
    symXClientSymXClientNumberValue: number;
    symXClientSymXClientNumberValueSpecified: boolean;
    symXClientSymXClientNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    symXClientFields: SymXClientFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
