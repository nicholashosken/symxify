import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CommentFields_2 } from "./commentFields_2";
import { VersionType } from "./versionType";

export interface CreateCommentRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    commentFields: CommentFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}