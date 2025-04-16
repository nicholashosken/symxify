import { SynapsysMrm } from "./synapsysMrm";

export interface SynapsysMrmList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    synapsysMrm: SynapsysMrm[];
    synapsysMrmSpecified: boolean;
}