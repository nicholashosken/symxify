import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { McwExecutionHeader } from "./mcwExecutionHeader";
import { McwExecutionRequestBody } from "./mcwExecutionRequestBody";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface McwPowerOnExecutionRequest {
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    header: McwExecutionHeader;
    body: McwExecutionRequestBody;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    branchIdValue: number;
    branchIdValueSpecified: boolean;
    branchId: number | null;
}
