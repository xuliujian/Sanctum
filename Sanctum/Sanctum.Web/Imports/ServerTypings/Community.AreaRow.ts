namespace Sanctum.Community {
    export interface AreaRow {
        Id?: string;
        Pid?: string;
        ShortName?: string;
        Name?: string;
        FullName?: string;
        Level?: number;
        PinYin?: string;
        Code?: string;
        ZipCode?: string;
        FirstChar?: string;
        Longitude?: number;
        Latitude?: number;
    }

    export namespace AreaRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Id';
        export const localTextPrefix = 'Community.Area';

        export declare const enum Fields {
            Id = "Id",
            Pid = "Pid",
            ShortName = "ShortName",
            Name = "Name",
            FullName = "FullName",
            Level = "Level",
            PinYin = "PinYin",
            Code = "Code",
            ZipCode = "ZipCode",
            FirstChar = "FirstChar",
            Longitude = "Longitude",
            Latitude = "Latitude"
        }
    }
}
