
namespace Sanctum.Community {

    @Serenity.Decorators.registerClass()
    export class BookFriendGroupDialog extends Serenity.EntityDialog<BookFriendGroupRow, any> {
        protected getFormKey() { return BookFriendGroupForm.formKey; }
        protected getIdProperty() { return BookFriendGroupRow.idProperty; }
        protected getLocalTextPrefix() { return BookFriendGroupRow.localTextPrefix; }
        protected getNameProperty() { return BookFriendGroupRow.nameProperty; }
        protected getService() { return BookFriendGroupService.baseUrl; }

        protected form = new BookFriendGroupForm(this.idPrefix);

    }
}