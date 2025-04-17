import { IrsName } from "./irsName";
import { VersionType } from "./versionType";
export interface IrsNameSearchPagedSelectFieldsResponse {
    irsName: IrsName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
