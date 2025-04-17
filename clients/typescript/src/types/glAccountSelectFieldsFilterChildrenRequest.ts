import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlAccountSelectableFields } from "./glAccountSelectableFields";
import { GlAccountChildrenFilter } from "./glAccountChildrenFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlAccountSelectFieldsFilterChildrenRequest {
    glAccountNumber: string;
    glAccountSuffix: string;
    glAccountBranch: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: GlAccountSelectableFields;
    childrenSearchFilter: GlAccountChildrenFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}