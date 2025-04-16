import { ShareFields } from "./shareFields";
import { ShareAnalysisSelectableFields } from "./shareAnalysisSelectableFields";
import { ShareAnalysisGroupSelectableFields } from "./shareAnalysisGroupSelectableFields";
import { ShareAnalysisPlanSelectableFields } from "./shareAnalysisPlanSelectableFields";
import { ShareCheckOrderSelectableFields } from "./shareCheckOrderSelectableFields";
import { ShareHoldSelectableFields } from "./shareHoldSelectableFields";
import { ShareNameSelectableFields } from "./shareNameSelectableFields";
import { ShareNoteSelectableFields } from "./shareNoteSelectableFields";
import { ShareTrackingSelectableFields } from "./shareTrackingSelectableFields";
import { ShareTransactionSelectableFields } from "./shareTransactionSelectableFields";
import { ShareTransferSelectableFields } from "./shareTransferSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareSelectableFields {
    includeAllShareFieldsValue: boolean;
    includeAllShareFieldsValueSpecified: boolean;
    includeAllShareFields: boolean | null;
    shareFields: ShareFields;
    shareAnalysisSelectableFields: ShareAnalysisSelectableFields;
    shareAnalysisGroupSelectableFields: ShareAnalysisGroupSelectableFields;
    shareAnalysisPlanSelectableFields: ShareAnalysisPlanSelectableFields;
    shareCheckOrderSelectableFields: ShareCheckOrderSelectableFields;
    shareHoldSelectableFields: ShareHoldSelectableFields;
    shareNameSelectableFields: ShareNameSelectableFields;
    shareNoteSelectableFields: ShareNoteSelectableFields;
    shareTrackingSelectableFields: ShareTrackingSelectableFields;
    shareTransactionSelectableFields: ShareTransactionSelectableFields;
    shareTransferSelectableFields: ShareTransferSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}