
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class WeiXinUserGrid extends Serenity.EntityGrid<WeiXinUserRow, any> {
        protected getColumnsKey() { return 'Community.WeiXinUser'; }
        protected getDialogType() { return WeiXinUserDialog; }
        protected getIdProperty() { return WeiXinUserRow.idProperty; }
        protected getLocalTextPrefix() { return WeiXinUserRow.localTextPrefix; }
        protected getService() { return WeiXinUserService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}