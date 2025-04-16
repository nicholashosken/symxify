import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CommentFields_2 } from "./commentFields_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateCommentByIdRequest {
    accountNumber: string;
    commentLocatorValue: number;
    commentLocatorValueSpecified: boolean;
    commentLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    commentFields: CommentFields_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
