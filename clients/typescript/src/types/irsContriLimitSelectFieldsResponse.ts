import { IrsContriLimit } from "./irsContriLimit";
import { VersionType } from "./versionType";

export interface IrsContriLimitSelectFieldsResponse {
    irsContriLimit: IrsContriLimit;
    version1: VersionType;
    messageId: string;
}