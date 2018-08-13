
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[BookComment]")]
    [DisplayName("书籍评论"), InstanceName("书籍评论")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BookCommentRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), PrimaryKey, Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Book Id"), NotNull, ForeignKey("PrivateBook", "ID"), LeftJoin("jBook")]
        public Int32? BookId
        {
            get { return Fields.BookId[this]; }
            set { Fields.BookId[this] = value; }
        }

        [DisplayName("书籍名称"), Expression("jBook.[BookName]")]
        public String BookName
        {
            get { return Fields.BookName[this]; }
            set { Fields.BookName[this] = value; }
        }

        [DisplayName("评论者"), NotNull, ForeignKey("WeiXinUser", "ID"), LeftJoin("jWeiXinUser")]
        public Int32? CommentUserId
        {
            get { return Fields.CommentUserId[this]; }
            set { Fields.CommentUserId[this] = value; }
        }

        [DisplayName("评论者"), Expression("jWeiXinUser.[NickName]")]
        public String CommentUserNickName
        {
            get { return Fields.CommentUserNickName[this]; }
            set { Fields.CommentUserNickName[this] = value; }
        }

        [DisplayName("点赞")]
        public Int32? ApprovalCount
        {
            get { return Fields.ApprovalCount[this]; }
            set { Fields.ApprovalCount[this] = value; }
        }

        [DisplayName("评论内容"), Size(1073741823), NotNull, QuickSearch]
        public String CommentContent
        {
            get { return Fields.CommentContent[this]; }
            set { Fields.CommentContent[this] = value; }
        }

        [DisplayName("回复评论"), NotNull, Hidden]
        public Int32? ReplyCommentId
        {
            get { return Fields.ReplyCommentId[this]; }
            set { Fields.ReplyCommentId[this] = value; }
        }

        [DisplayName("评论时间"), NotNull]
        public DateTime? CommentTime
        {
            get { return Fields.CommentTime[this]; }
            set { Fields.CommentTime[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CommentContent; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BookCommentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public Int32Field BookId;
            public StringField BookName;

            public Int32Field CommentUserId;
            public StringField CommentUserNickName;

            public Int32Field ApprovalCount;

            public StringField CommentContent;

            public Int32Field ReplyCommentId;

            public DateTimeField CommentTime;


		}
    }
}
