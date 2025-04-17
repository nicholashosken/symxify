import { DealerComment } from "./dealerComment";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DealerCommentSearchPagedSelectFieldsResponse {
    dealerComment: DealerComment[];
    dealerCommentSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}