
namespace Sanctum.Community.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Community.BookComment")]
    [BasedOnRow(typeof(Entities.BookCommentRow), CheckNames = true)]
    public class BookCommentForm
    {
        public Int32 BookId { get; set; }
        public Int32 CommentUserId { get; set; }
        public Int32 ApprovalCount { get; set; }
        public String CommentContent { get; set; }
        public Int32 ReplyCommentId { get; set; }
        public DateTime CommentTime { get; set; }
    }
}