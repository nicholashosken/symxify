import { PledgeFields_2 } from "./pledgeFields_2";

export interface PledgeUpdateRequest {
    pledgeLocator: number | null;
    pledgeFields: PledgeFields_2;
}