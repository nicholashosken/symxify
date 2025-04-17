import { DealerCommentFields } from "./dealerCommentFields";
import { VersionType } from "./versionType";
export interface DealerCommentSelectableFields {
    includeAllDealerCommentFields: boolean | null;
    dealerCommentFields: DealerCommentFields;
    version1: VersionType;
}
