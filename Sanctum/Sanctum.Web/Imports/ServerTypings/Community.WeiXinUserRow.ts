namespace Sanctum.Community {
    export interface WeiXinUserRow {
        Id?: number;
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
        export const idProperty = 'Id';
        export const nameProperty = 'OpenId';
        export const localTextPrefix = 'Community.WeiXinUser';

        export declare const enum Fields {
            Id = "Id",
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
