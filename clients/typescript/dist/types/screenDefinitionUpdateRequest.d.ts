import { ScreenDefinitionFields_2 } from "./screenDefinitionFields_2";
export interface ScreenDefinitionUpdateRequest {
    screenDefinitionScreenSelectionValue: number;
    screenDefinitionScreenSelectionValueSpecified: boolean;
    screenDefinitionScreenSelection: number | null;
    screenDefinitionTypeValue: number;
    screenDefinitionTypeValueSpecified: boolean;
    screenDefinitionType: number | null;
    screenDefinitionFields: ScreenDefinitionFields_2;
}
