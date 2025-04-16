import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SymXClientSingleSelectableFields } from "./symXClientSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SymXClientSelectFieldsRequest {
    symXClientInstanceIdValue: number;
    symXClientInstanceIdValueSpecified: boolean;
    symXClientInstanceId: number | null;
    symXClientSymXClientNumberValue: number;
    symXClientSymXClientNumberValueSpecified: boolean;
    symXClientSymXClientNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: SymXClientSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}