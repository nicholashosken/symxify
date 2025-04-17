import { IrsName } from "./irsName";
import { VersionType } from "./versionType";
export interface IrsNamePagedListSelectFieldsResponse {
    irsName: IrsName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
