namespace Sanctum.Community {
    export interface RecommendBookRow {
        Id?: number;
        BookName?: string;
        BookCategory?: string;
        Author?: string;
        Exponent?: number;
        BookRemark?: string;
        Instroduction?: string;
        ViewCount?: number;
        HeatLevel?: number;
        Referrer?: number;
        ReferTime?: string;
    }

    export namespace RecommendBookRow {
        export const idProperty = 'Id';
        export const nameProperty = 'BookName';
        export const localTextPrefix = 'Community.RecommendBook';

        export declare const enum Fields {
            Id = "Id",
            BookName = "BookName",
            BookCategory = "BookCategory",
            Author = "Author",
            Exponent = "Exponent",
            BookRemark = "BookRemark",
            Instroduction = "Instroduction",
            ViewCount = "ViewCount",
            HeatLevel = "HeatLevel",
            Referrer = "Referrer",
            ReferTime = "ReferTime"
        }
    }
}
