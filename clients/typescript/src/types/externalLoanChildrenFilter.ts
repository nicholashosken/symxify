import { ExternalLoanNameFilter } from "./externalLoanNameFilter";
import { ExternalLoanNoteFilter } from "./externalLoanNoteFilter";
import { ExternalLoanTrackingFilter } from "./externalLoanTrackingFilter";
import { ExternalLoanTransferFilter } from "./externalLoanTransferFilter";
import { VersionType } from "./versionType";

export interface ExternalLoanChildrenFilter {
    externalLoanNameFilter: ExternalLoanNameFilter;
    externalLoanNoteFilter: ExternalLoanNoteFilter;
    externalLoanTrackingFilter: ExternalLoanTrackingFilter;
    externalLoanTransferFilter: ExternalLoanTransferFilter;
    version1: VersionType;
}