
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class BookFriendDialog extends Serenity.EntityDialog<BookFriendRow, any> {
        protected getFormKey() { return BookFriendForm.formKey; }
        protected getIdProperty() { return BookFriendRow.idProperty; }
        protected getLocalTextPrefix() { return BookFriendRow.localTextPrefix; }
        protected getService() { return BookFriendService.baseUrl; }

        protected form = new BookFriendForm(this.idPrefix);

    }
}