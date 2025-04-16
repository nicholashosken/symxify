import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ApMiscFields {
    approverUserIdsValue: boolean;
    approverUserIdsValueSpecified: boolean;
    approverUserIds: boolean | null;
    expenseProcessorUserIdsValue: boolean;
    expenseProcessorUserIdsValueSpecified: boolean;
    expenseProcessorUserIds: boolean | null;
    fwdUserIdsValue: boolean;
    fwdUserIdsValueSpecified: boolean;
    fwdUserIds: boolean | null;
    paymentProcessorUserIdsValue: boolean;
    paymentProcessorUserIdsValueSpecified: boolean;
    paymentProcessorUserIds: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}