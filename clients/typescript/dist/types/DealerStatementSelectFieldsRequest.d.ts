import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DealerStatementSingleSelectableFields } from "./dealerStatementSingleSelectableFields";
import { VersionType } from "./versionType";
export interface DealerStatementSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: DealerStatementSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
