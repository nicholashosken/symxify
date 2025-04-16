import { Comment } from "./comment";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CommentSelectFieldsResponse {
    comment: Comment;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
