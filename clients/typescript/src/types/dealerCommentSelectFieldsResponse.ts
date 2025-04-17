import { DealerComment } from "./dealerComment";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DealerCommentSelectFieldsResponse {
    dealerComment: DealerComment;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}