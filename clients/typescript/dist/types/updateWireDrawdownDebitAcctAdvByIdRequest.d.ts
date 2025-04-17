import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireDrawdownDebitAcctAdvFields_2 } from "./wireDrawdownDebitAcctAdvFields_2";
import { VersionType } from "./versionType";
export interface UpdateWireDrawdownDebitAcctAdvByIdRequest {
    wireSequenceNumber: number | null;
    wireDrawdownDebitAcctAdvLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireDrawdownDebitAcctAdvFields: WireDrawdownDebitAcctAdvFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
