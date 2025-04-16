import { CommentFields } from "./commentFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CommentSelectableFields {
    includeAllCommentFieldsValue: boolean;
    includeAllCommentFieldsValueSpecified: boolean;
    includeAllCommentFields: boolean | null;
    commentFields: CommentFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
