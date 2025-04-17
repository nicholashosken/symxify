import { ItcInstallation } from "./itcInstallation";
import { VersionType } from "./versionType";
export interface ItcInstallationSelectFieldsResponse {
    itcInstallation: ItcInstallation;
    version1: VersionType;
    messageId: string;
}
