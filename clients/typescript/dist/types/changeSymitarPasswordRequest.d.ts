import { UserNumberCredentials } from "./userNumberCredentials";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { EcaaBaseRequest } from "./ecaaBaseRequest";
export interface ChangeSymitarPasswordRequest extends EcaaBaseRequest {
    credentials: UserNumberCredentials;
    newPassword: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
