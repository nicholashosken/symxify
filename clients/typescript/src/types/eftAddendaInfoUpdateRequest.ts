import { EftAddendaInfoFields_2 } from "./eftAddendaInfoFields_2";

export interface EftAddendaInfoUpdateRequest {
    eftAddendaInfoLocatorValue: number;
    eftAddendaInfoLocatorValueSpecified: boolean;
    eftAddendaInfoLocator: number | null;
    eftAddendaInfoFields: EftAddendaInfoFields_2;
}