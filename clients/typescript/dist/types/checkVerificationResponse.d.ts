import { Status_2 } from "./status_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CheckVerificationResponse {
    status: Status_2;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
