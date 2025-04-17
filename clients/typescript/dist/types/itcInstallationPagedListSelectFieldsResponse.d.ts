import { ItcInstallation } from "./itcInstallation";
import { VersionType } from "./versionType";
export interface ItcInstallationPagedListSelectFieldsResponse {
    itcInstallation: ItcInstallation[];
    token: string;
    version1: VersionType;
    messageId: string;
}
