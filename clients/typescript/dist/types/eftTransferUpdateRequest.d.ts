import { EftTransferFields_2 } from "./eftTransferFields_2";
export interface EftTransferUpdateRequest {
    eftTransferLocatorValue: number;
    eftTransferLocatorValueSpecified: boolean;
    eftTransferLocator: number | null;
    eftTransferFields: EftTransferFields_2;
}
