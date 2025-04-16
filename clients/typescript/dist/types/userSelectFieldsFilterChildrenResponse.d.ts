import { User } from "./user";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UserSelectFieldsFilterChildrenResponse {
    user: User;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
