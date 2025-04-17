import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ParameterSelectableFields } from "./parameterSelectableFields";
import { ParameterChildrenFilter } from "./parameterChildrenFilter";
import { VersionType } from "./versionType";

export interface ParameterSelectFieldsFilterChildrenRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: ParameterSelectableFields;
    childrenSearchFilter: ParameterChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}