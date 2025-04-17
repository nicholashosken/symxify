import { CtrPersonFields_2 } from "./ctrPersonFields_2";

export interface CtrPersonUpdateRequest {
    ctrPersonLocatorValue: number;
    ctrPersonLocatorValueSpecified: boolean;
    ctrPersonLocator: number | null;
    ctrPersonFields: CtrPersonFields_2;
}