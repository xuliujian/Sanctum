namespace Sanctum.Community {
    export interface BorrowApplyRow {
        Id?: number;
        ApplyBookId?: number;
        BookName?: string;
        Applier?: number;
        ApplierNickName?: string;
        ApplyTime?: string;
        ApplyStatus?: number;
    }

    export namespace BorrowApplyRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Community.BorrowApply';

        export declare const enum Fields {
            Id = "Id",
            ApplyBookId = "ApplyBookId",
            BookName = "BookName",
            Applier = "Applier",
            ApplierNickName = "ApplierNickName",
            ApplyTime = "ApplyTime",
            ApplyStatus = "ApplyStatus"
        }
    }
}
