import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CpWorkCardSelectableFields } from "./cpWorkCardSelectableFields";
import { CpWorkCardChildrenFilter } from "./cpWorkCardChildrenFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CpWorkCardSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    cpWorkCardLocatorValue: number;
    cpWorkCardLocatorValueSpecified: boolean;
    cpWorkCardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CpWorkCardSelectableFields;
    childrenSearchFilter: CpWorkCardChildrenFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
