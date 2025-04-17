import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CpWorkCardSelectableFields } from "./cpWorkCardSelectableFields";
import { CpWorkCardChildrenFilter } from "./cpWorkCardChildrenFilter";
import { VersionType } from "./versionType";
export interface CpWorkCardSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    cpWorkCardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CpWorkCardSelectableFields;
    childrenSearchFilter: CpWorkCardChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
