namespace Sanctum.Community {
    export interface BookshelfRow {
        Id?: number;
        BookshelfName?: string;
        AdornBackground?: string;
        Introduction?: string;
        Creator?: number;
        CreatedTime?: string;
        Modifier?: number;
        ModifiedTime?: string;
    }

    export namespace BookshelfRow {
        export const idProperty = 'Id';
        export const nameProperty = 'BookshelfName';
        export const localTextPrefix = 'Community.Bookshelf';

        export declare const enum Fields {
            Id = "Id",
            BookshelfName = "BookshelfName",
            AdornBackground = "AdornBackground",
            Introduction = "Introduction",
            Creator = "Creator",
            CreatedTime = "CreatedTime",
            Modifier = "Modifier",
            ModifiedTime = "ModifiedTime"
        }
    }
}
