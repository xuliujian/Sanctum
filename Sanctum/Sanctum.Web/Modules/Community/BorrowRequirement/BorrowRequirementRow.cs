
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[BorrowRequirement]")]
    [DisplayName("借阅发布"), InstanceName("借阅发布")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BorrowRequirementRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), Identity, PrimaryKey]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("PublisherID"), NotNull, ForeignKey("WeiXinUser","ID"), LeftJoin("jWeiXinUser")]
        public Int32? PublisherID
        {
            get { return Fields.PublisherID[this]; }
            set { Fields.PublisherID[this] = value; }
        }

        [DisplayName("发布人昵称"), Expression("jWeiXinUser.[NickName]")]
        public String PublisherNickName
        {
            get { return Fields.PublisherNickName[this]; }
            set { Fields.PublisherNickName[this] = value; }
        }

        [DisplayName("书籍名称"), Size(100), QuickSearch]
        public String BookName
        {
            get { return Fields.BookName[this]; }
            set { Fields.BookName[this] = value; }
        }

        [DisplayName("书籍类别"), Size(100)]
        public String BookCategory
        {
            get { return Fields.BookCategory[this]; }
            set { Fields.BookCategory[this] = value; }
        }

        [DisplayName("是否有偿"), NotNull, CheckboxFormatter]
        public Boolean? IsPaid
        {
            get { return Fields.IsPaid[this]; }
            set { Fields.IsPaid[this] = value; }
        }

        [DisplayName("状态"), NotNull]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("点击次数"), NotNull]
        public Int32? ViewCount
        {
            get { return Fields.ViewCount[this]; }
            set { Fields.ViewCount[this] = value; }
        }

        [DisplayName("发布时间")]
        public DateTime? PublishTime
        {
            get { return Fields.PublishTime[this]; }
            set { Fields.PublishTime[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BookName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BorrowRequirementRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public Int32Field PublisherID;

            public StringField PublisherNickName;

            public StringField BookName;

            public StringField BookCategory;

            public BooleanField IsPaid;

            public Int32Field Status;

            public Int32Field ViewCount;

            public DateTimeField PublishTime;


		}
    }
}
