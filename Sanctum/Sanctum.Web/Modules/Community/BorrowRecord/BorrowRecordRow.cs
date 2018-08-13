
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[BorrowRecord]")]
    [DisplayName("借阅记录"), InstanceName("借阅记录")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BorrowRecordRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), PrimaryKey, Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Debit User Id"), NotNull, ForeignKey("WeiXinUser", "ID"), LeftJoin("jWeiXinUser")]
        public Int32? DebitUserId
        {
            get { return Fields.DebitUserId[this]; }
            set { Fields.DebitUserId[this] = value; }
        }

        [DisplayName("借阅者"), Expression("jWeiXinUser.[NickName]")]
        public String DebitUserNickName
        {
            get { return Fields.DebitUserNickName[this]; }
            set { Fields.DebitUserNickName[this] = value; }
        }

        [DisplayName("借阅时间"), NotNull]
        public DateTime? BorrowTime
        {
            get { return Fields.BorrowTime[this]; }
            set { Fields.BorrowTime[this] = value; }
        }

        [DisplayName("Book Id"), NotNull, ForeignKey("PrivateBook", "ID"), LeftJoin("jBook")]
        public Int32? BookId
        {
            get { return Fields.BookId[this]; }
            set { Fields.BookId[this] = value; }
        }

        [DisplayName("书籍名"), Expression("jBook.[BookName]")]
        public String BookName
        {
            get { return Fields.BookName[this]; }
            set { Fields.BookName[this] = value; }
        }

        [DisplayName("Borrow Requirement Id"), NotNull, Hidden]
        public Int32? BorrowRequirementId
        {
            get { return Fields.BorrowRequirementId[this]; }
            set { Fields.BorrowRequirementId[this] = value; }
        }

        [DisplayName("Borrow Apply Id"), NotNull, Hidden]
        public Int32? BorrowApplyId
        {
            get { return Fields.BorrowApplyId[this]; }
            set { Fields.BorrowApplyId[this] = value; }
        }

        [DisplayName("状态"), NotNull]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("接受请求时间")]
        public DateTime? AcceptTime
        {
            get { return Fields.AcceptTime[this]; }
            set { Fields.AcceptTime[this] = value; }
        }

        [DisplayName("归还书籍时间"), NotNull]
        public DateTime? RevertTime
        {
            get { return Fields.RevertTime[this]; }
            set { Fields.RevertTime[this] = value; }
        }

        [DisplayName("借方评价"), Size(100), QuickSearch]
        public String DebitRemarkContent
        {
            get { return Fields.DebitRemarkContent[this]; }
            set { Fields.DebitRemarkContent[this] = value; }
        }

        [DisplayName("借方评价时间")]
        public DateTime? DebitRemarkTime
        {
            get { return Fields.DebitRemarkTime[this]; }
            set { Fields.DebitRemarkTime[this] = value; }
        }

        [DisplayName("租方评价"), Size(100)]
        public String RenterRemarkContent
        {
            get { return Fields.RenterRemarkContent[this]; }
            set { Fields.RenterRemarkContent[this] = value; }
        }

        [DisplayName("租方评价时间")]
        public DateTime? RenterRemarkTime
        {
            get { return Fields.RenterRemarkTime[this]; }
            set { Fields.RenterRemarkTime[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DebitRemarkContent; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BorrowRecordRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public Int32Field DebitUserId;

            public StringField DebitUserNickName;

            public DateTimeField BorrowTime;

            public Int32Field BookId;

            public StringField BookName;

            public Int32Field BorrowRequirementId;

            public Int32Field BorrowApplyId;

            public Int32Field Status;

            public DateTimeField AcceptTime;

            public DateTimeField RevertTime;

            public StringField DebitRemarkContent;

            public DateTimeField DebitRemarkTime;

            public StringField RenterRemarkContent;

            public DateTimeField RenterRemarkTime;


		}
    }
}
