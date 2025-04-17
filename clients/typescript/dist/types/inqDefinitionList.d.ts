import { InqDefinition } from "./inqDefinition";
export interface InqDefinitionList {
    hasReachedMaximumListSize: boolean | null;
    inqDefinition: InqDefinition[];
}
