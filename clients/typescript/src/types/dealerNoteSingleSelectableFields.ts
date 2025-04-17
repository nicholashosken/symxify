import { DealerNoteFields } from "./dealerNoteFields";
import { VersionType } from "./versionType";

export interface DealerNoteSingleSelectableFields {
    includeAllDealerNoteFields: boolean | null;
    dealerNoteFields: DealerNoteFields;
    version1: VersionType;
}