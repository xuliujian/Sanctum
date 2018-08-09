namespace Sanctum.Community {
    export interface BookCategoryRow {
        Id?: number;
        CategoryName?: string;
        ParentId?: number;
        Remark?: string;
        IsEnable?: boolean;
        Creator?: number;
        CreatedTime?: string;
        Modifier?: number;
        ModifiedTime?: string;
    }

    export namespace BookCategoryRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CategoryName';
        export const localTextPrefix = 'Community.BookCategory';

        export declare const enum Fields {
            Id = "Id",
            CategoryName = "CategoryName",
            ParentId = "ParentId",
            Remark = "Remark",
            IsEnable = "IsEnable",
            Creator = "Creator",
            CreatedTime = "CreatedTime",
            Modifier = "Modifier",
            ModifiedTime = "ModifiedTime"
        }
    }
}
