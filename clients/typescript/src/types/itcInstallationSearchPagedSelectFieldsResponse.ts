import { ItcInstallation } from "./itcInstallation";
import { VersionType } from "./versionType";

export interface ItcInstallationSearchPagedSelectFieldsResponse {
    itcInstallation: ItcInstallation[];
    token: string;
    version1: VersionType;
    messageId: string;
}