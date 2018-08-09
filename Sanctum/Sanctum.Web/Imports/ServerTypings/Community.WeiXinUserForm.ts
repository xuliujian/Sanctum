namespace Sanctum.Community {
    export interface WeiXinUserForm {
        OpenId: Serenity.StringEditor;
        NickName: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Province: Serenity.StringEditor;
        City: Serenity.StringEditor;
        HeaderImage: Serenity.StringEditor;
        Mobile: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        HonourRank: Serenity.DecimalEditor;
        KnowledgeRank: Serenity.DecimalEditor;
        PersonalityEval: Serenity.StringEditor;
        HobbyCategory: Serenity.StringEditor;
        ActiveLongitude: Serenity.DecimalEditor;
        ActiveLatitude: Serenity.DecimalEditor;
        LastActiveTime: Serenity.DateEditor;
    }

    export class WeiXinUserForm extends Serenity.PrefixedContext {
        static formKey = 'Community.WeiXinUser';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WeiXinUserForm.init)  {
                WeiXinUserForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;

                Q.initFormType(WeiXinUserForm, [
                    'OpenId', w0,
                    'NickName', w0,
                    'Country', w0,
                    'Province', w0,
                    'City', w0,
                    'HeaderImage', w0,
                    'Mobile', w0,
                    'Address', w0,
                    'HonourRank', w1,
                    'KnowledgeRank', w1,
                    'PersonalityEval', w0,
                    'HobbyCategory', w0,
                    'ActiveLongitude', w1,
                    'ActiveLatitude', w1,
                    'LastActiveTime', w2
                ]);
            }
        }
    }
}
