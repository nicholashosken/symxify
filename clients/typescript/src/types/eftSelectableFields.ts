import { EftFields } from "./eftFields";
import { EftAddendaInfoSelectableFields } from "./eftAddendaInfoSelectableFields";
import { EftNameSelectableFields } from "./eftNameSelectableFields";
import { EftTransferSelectableFields } from "./eftTransferSelectableFields";
import { VersionType } from "./versionType";

export interface EftSelectableFields {
    includeAllEftFields: boolean | null;
    eftFields: EftFields;
    eftAddendaInfoSelectableFields: EftAddendaInfoSelectableFields;
    eftNameSelectableFields: EftNameSelectableFields;
    eftTransferSelectableFields: EftTransferSelectableFields;
    version1: VersionType;
}