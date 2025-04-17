import { DealerComment } from "./dealerComment";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DealerCommentPagedListSelectFieldsResponse {
    dealerComment: DealerComment[];
    dealerCommentSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}