import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DocExcpNoticeFields_2 } from "./docExcpNoticeFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface UpdateDocExcpNoticeByIdRequest {
    docExcpNoticeNoticeNumberValue: number;
    docExcpNoticeNoticeNumberValueSpecified: boolean;
    docExcpNoticeNoticeNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    docExcpNoticeFields: DocExcpNoticeFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}