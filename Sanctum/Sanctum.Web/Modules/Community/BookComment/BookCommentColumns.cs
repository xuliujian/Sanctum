
namespace Sanctum.Community.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Community.BookComment")]
    [BasedOnRow(typeof(Entities.BookCommentRow), CheckNames = true)]
    public class BookCommentColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 BookId { get; set; }
        public Int32 CommentUserId { get; set; }
        public Int32 ApprovalCount { get; set; }
        [EditLink]
        public String CommentContent { get; set; }
        public Int32 ReplyCommentId { get; set; }
        public DateTime CommentTime { get; set; }
    }
}