import { ScreenDefinition } from "./screenDefinition";
export interface ScreenDefinitionList {
    hasReachedMaximumListSize: boolean | null;
    screenDefinition: ScreenDefinition[];
}
