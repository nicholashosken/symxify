import { IrsNameFields_2 } from "./irsNameFields_2";

export interface IrsNameUpdateRequest {
    irsNameLocatorValue: number;
    irsNameLocatorValueSpecified: boolean;
    irsNameLocator: number | null;
    irsNameFields: IrsNameFields_2;
}