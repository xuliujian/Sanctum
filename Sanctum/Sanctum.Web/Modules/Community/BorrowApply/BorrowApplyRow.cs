
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[BorrowApply]")]
    [DisplayName("借阅申请"), InstanceName("借阅申请")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BorrowApplyRow : Row, IIdRow
    {

        [DisplayName("Id"), Column("ID"), PrimaryKey, Identity, Hidden]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("借阅书籍"), NotNull, ForeignKey("PrivateBook","ID"), LeftJoin("jBook")]
        public Int32? ApplyBookId
        {
            get { return Fields.ApplyBookId[this]; }
            set { Fields.ApplyBookId[this] = value; }
        }

        [DisplayName("借阅书籍"), Expression("jBook.[BookName]")]
        public String BookName
        {
            get { return Fields.BookName[this]; }
            set { Fields.BookName[this] = value; }
        }

        [DisplayName("Applier"), NotNull, ForeignKey("WeiXinUser","ID"), LeftJoin("jWeiXinUser")]
        public Int32? Applier
        {
            get { return Fields.Applier[this]; }
            set { Fields.Applier[this] = value; }
        }

        [DisplayName("书友昵称"), Expression("jWeiXinUser.[NickName]")]
        public String ApplierNickName
        {
            get { return Fields.ApplierNickName[this]; }
            set { Fields.ApplierNickName[this] = value; }
        }

        [DisplayName("申请时间"), NotNull]
        public DateTime? ApplyTime
        {
            get { return Fields.ApplyTime[this]; }
            set { Fields.ApplyTime[this] = value; }
        }

        [DisplayName("申请状态"), NotNull]
        public Int32? ApplyStatus
        {
            get { return Fields.ApplyStatus[this]; }
            set { Fields.ApplyStatus[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BorrowApplyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public Int32Field ApplyBookId;

            public StringField BookName;

            public Int32Field Applier;

            public StringField ApplierNickName;

            public DateTimeField ApplyTime;

            public Int32Field ApplyStatus;


		}
    }
}
