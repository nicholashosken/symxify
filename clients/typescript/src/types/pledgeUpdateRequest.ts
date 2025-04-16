import { PledgeFields_2 } from "./pledgeFields_2";

export interface PledgeUpdateRequest {
    pledgeLocatorValue: number;
    pledgeLocatorValueSpecified: boolean;
    pledgeLocator: number | null;
    pledgeFields: PledgeFields_2;
}