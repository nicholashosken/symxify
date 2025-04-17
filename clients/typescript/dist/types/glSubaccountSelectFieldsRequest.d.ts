import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlSubaccountSingleSelectableFields } from "./glSubaccountSingleSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlSubaccountSelectFieldsRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    glSubaccountId: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: GlSubaccountSingleSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
