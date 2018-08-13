namespace Sanctum.Community {
    export interface PrivateBookRow {
        Id?: number;
        BookName?: string;
        BookCategories?: string;
        Author?: string;
        Price?: number;
        Publisher?: string;
        CoverImage?: string;
        RecommendLevel?: number;
        Insight?: string;
        Summary?: string;
        NeedPaid?: boolean;
        BookshelfId?: number;
        BookshelfName?: string;
        OffShelves?: boolean;
        Status?: number;
        Uploader?: number;
        UploaderNickName?: string;
        UploadTime?: string;
    }

    export namespace PrivateBookRow {
        export const idProperty = 'Id';
        export const nameProperty = 'BookName';
        export const localTextPrefix = 'Community.PrivateBook';

        export declare const enum Fields {
            Id = "Id",
            BookName = "BookName",
            BookCategories = "BookCategories",
            Author = "Author",
            Price = "Price",
            Publisher = "Publisher",
            CoverImage = "CoverImage",
            RecommendLevel = "RecommendLevel",
            Insight = "Insight",
            Summary = "Summary",
            NeedPaid = "NeedPaid",
            BookshelfId = "BookshelfId",
            BookshelfName = "BookshelfName",
            OffShelves = "OffShelves",
            Status = "Status",
            Uploader = "Uploader",
            UploaderNickName = "UploaderNickName",
            UploadTime = "UploadTime"
        }
    }
}
