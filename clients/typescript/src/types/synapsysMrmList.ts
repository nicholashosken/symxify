import { SynapsysMrm } from "./synapsysMrm";

export interface SynapsysMrmList {
    hasReachedMaximumListSize: boolean | null;
    synapsysMrm: SynapsysMrm[];
}