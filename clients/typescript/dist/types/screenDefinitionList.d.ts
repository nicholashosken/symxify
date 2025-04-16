import { ScreenDefinition } from "./screenDefinition";
export interface ScreenDefinitionList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    screenDefinition: ScreenDefinition[];
    screenDefinitionSpecified: boolean;
}
