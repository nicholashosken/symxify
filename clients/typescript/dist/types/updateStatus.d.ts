import { FailedUpdateStatus } from "./failedUpdateStatus";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UpdateStatus {
    isAllFieldsUpdateSuccess: boolean;
    failedUpdateStatus: FailedUpdateStatus;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
