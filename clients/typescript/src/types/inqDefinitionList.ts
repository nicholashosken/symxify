import { InqDefinition } from "./inqDefinition";

export interface InqDefinitionList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    inqDefinition: InqDefinition[];
    inqDefinitionSpecified: boolean;
}