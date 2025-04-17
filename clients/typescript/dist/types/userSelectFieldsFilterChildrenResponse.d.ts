import { User } from "./user";
import { VersionType } from "./versionType";
export interface UserSelectFieldsFilterChildrenResponse {
    user: User;
    version1: VersionType;
    messageId: string;
}
