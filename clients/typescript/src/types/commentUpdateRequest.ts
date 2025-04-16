import { CommentFields_2 } from "./commentFields_2";

export interface CommentUpdateRequest {
    commentLocatorValue: number;
    commentLocatorValueSpecified: boolean;
    commentLocator: number | null;
    commentFields: CommentFields_2;
}