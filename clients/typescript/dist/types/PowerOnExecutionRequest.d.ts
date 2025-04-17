import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExecutionHeader } from "./executionHeader";
import { ExecutionRequestBody } from "./executionRequestBody";
import { VersionType } from "./versionType";
export interface PowerOnExecutionRequest {
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    header: ExecutionHeader;
    body: ExecutionRequestBody;
    version1: VersionType;
    branchId: number | null;
}
