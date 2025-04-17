import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireDrawdownDebitAcctAdvSingleSelectableFields } from "./wireDrawdownDebitAcctAdvSingleSelectableFields";
import { VersionType } from "./versionType";
export interface WireDrawdownDebitAcctAdvSelectFieldsRequest {
    wireSequenceNumber: number | null;
    wireDrawdownDebitAcctAdvLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WireDrawdownDebitAcctAdvSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
