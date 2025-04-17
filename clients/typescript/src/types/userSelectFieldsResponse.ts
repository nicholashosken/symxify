import { User } from "./user";
import { VersionType } from "./versionType";

export interface UserSelectFieldsResponse {
    user: User;
    version1: VersionType;
    messageId: string;
}