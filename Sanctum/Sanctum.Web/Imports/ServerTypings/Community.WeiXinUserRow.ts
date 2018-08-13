namespace Sanctum.Community {
    export interface WeiXinUserRow {
        ID?: number;
        OpenId?: string;
        NickName?: string;
        Country?: string;
        Province?: string;
        City?: string;
        HeaderImage?: string;
        Mobile?: string;
        Address?: string;
        HonourRank?: number;
        KnowledgeRank?: number;
        PersonalityEval?: string;
        HobbyCategory?: string;
        ActiveLongitude?: number;
        ActiveLatitude?: number;
        LastActiveTime?: string;
    }

    export namespace WeiXinUserRow {
        export const idProperty = 'ID';
        export const nameProperty = 'OpenId';
        export const localTextPrefix = 'Community.WeiXinUser';

        export declare const enum Fields {
            ID = "ID",
            OpenId = "OpenId",
            NickName = "NickName",
            Country = "Country",
            Province = "Province",
            City = "City",
            HeaderImage = "HeaderImage",
            Mobile = "Mobile",
            Address = "Address",
            HonourRank = "HonourRank",
            KnowledgeRank = "KnowledgeRank",
            PersonalityEval = "PersonalityEval",
            HobbyCategory = "HobbyCategory",
            ActiveLongitude = "ActiveLongitude",
            ActiveLatitude = "ActiveLatitude",
            LastActiveTime = "LastActiveTime"
        }
    }
}
