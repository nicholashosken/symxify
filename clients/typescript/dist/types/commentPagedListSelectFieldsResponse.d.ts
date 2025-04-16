import { Comment } from "./comment";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CommentPagedListSelectFieldsResponse {
    comment: Comment[];
    commentSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
