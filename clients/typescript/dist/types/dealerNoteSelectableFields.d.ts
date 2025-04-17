import { DealerNoteFields } from "./dealerNoteFields";
import { VersionType } from "./versionType";
export interface DealerNoteSelectableFields {
    includeAllDealerNoteFields: boolean | null;
    dealerNoteFields: DealerNoteFields;
    version1: VersionType;
}
