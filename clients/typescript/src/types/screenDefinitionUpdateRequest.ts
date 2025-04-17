import { ScreenDefinitionFields_2 } from "./screenDefinitionFields_2";

export interface ScreenDefinitionUpdateRequest {
    screenDefinitionScreenSelection: number | null;
    screenDefinitionType: number | null;
    screenDefinitionFields: ScreenDefinitionFields_2;
}