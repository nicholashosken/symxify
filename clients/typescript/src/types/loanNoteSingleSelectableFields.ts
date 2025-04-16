import { LoanNoteFields } from "./loanNoteFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanNoteSingleSelectableFields {
    includeAllLoanNoteFieldsValue: boolean;
    includeAllLoanNoteFieldsValueSpecified: boolean;
    includeAllLoanNoteFields: boolean | null;
    loanNoteFields: LoanNoteFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}