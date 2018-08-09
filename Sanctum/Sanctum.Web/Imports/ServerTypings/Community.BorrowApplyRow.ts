namespace Sanctum.Community {
    export interface BorrowApplyRow {
        Id?: number;
        ApplyBookId?: number;
        Applier?: number;
        ApplyTime?: string;
        ApplyStatus?: number;
    }

    export namespace BorrowApplyRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Community.BorrowApply';

        export declare const enum Fields {
            Id = "Id",
            ApplyBookId = "ApplyBookId",
            Applier = "Applier",
            ApplyTime = "ApplyTime",
            ApplyStatus = "ApplyStatus"
        }
    }
}
