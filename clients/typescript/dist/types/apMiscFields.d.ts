import { VersionType } from "./versionType";
export interface ApMiscFields {
    approverUserIds: boolean | null;
    expenseProcessorUserIds: boolean | null;
    fwdUserIds: boolean | null;
    paymentProcessorUserIds: boolean | null;
    version1: VersionType;
}
