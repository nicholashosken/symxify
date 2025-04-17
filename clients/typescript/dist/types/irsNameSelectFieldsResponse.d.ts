import { IrsName } from "./irsName";
import { VersionType } from "./versionType";
export interface IrsNameSelectFieldsResponse {
    irsName: IrsName;
    version1: VersionType;
    messageId: string;
}
