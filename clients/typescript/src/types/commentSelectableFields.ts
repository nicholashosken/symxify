import { CommentFields } from "./commentFields";
import { VersionType } from "./versionType";

export interface CommentSelectableFields {
    includeAllCommentFields: boolean | null;
    commentFields: CommentFields;
    version1: VersionType;
}