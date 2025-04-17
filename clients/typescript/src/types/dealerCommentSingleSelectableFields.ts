import { DealerCommentFields } from "./dealerCommentFields";
import { VersionType } from "./versionType";

export interface DealerCommentSingleSelectableFields {
    includeAllDealerCommentFields: boolean | null;
    dealerCommentFields: DealerCommentFields;
    version1: VersionType;
}