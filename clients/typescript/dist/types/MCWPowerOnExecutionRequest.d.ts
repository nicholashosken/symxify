import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { McwExecutionHeader } from "./mcwExecutionHeader";
import { McwExecutionRequestBody } from "./mcwExecutionRequestBody";
import { VersionType } from "./versionType";
export interface McwPowerOnExecutionRequest {
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    header: McwExecutionHeader;
    body: McwExecutionRequestBody;
    version1: VersionType;
    branchId: number | null;
}
