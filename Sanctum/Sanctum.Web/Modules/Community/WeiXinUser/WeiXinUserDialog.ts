
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class WeiXinUserDialog extends Serenity.EntityDialog<WeiXinUserRow, any> {
        protected getFormKey() { return WeiXinUserForm.formKey; }
        protected getIdProperty() { return WeiXinUserRow.idProperty; }
        protected getLocalTextPrefix() { return WeiXinUserRow.localTextPrefix; }
        protected getNameProperty() { return WeiXinUserRow.nameProperty; }
        protected getService() { return WeiXinUserService.baseUrl; }

        protected form = new WeiXinUserForm(this.idPrefix);

    }
}