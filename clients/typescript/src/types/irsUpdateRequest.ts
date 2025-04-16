import { IrsFields_2 } from "./irsFields_2";

export interface IrsUpdateRequest {
    irsLocatorValue: number;
    irsLocatorValueSpecified: boolean;
    irsLocator: number | null;
    irsFields: IrsFields_2;
}