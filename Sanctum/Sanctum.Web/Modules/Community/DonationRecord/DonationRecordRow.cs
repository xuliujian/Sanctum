
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[DonationRecord]")]
    [DisplayName("捐赠书籍"), InstanceName("捐赠书籍")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DonationRecordRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), Identity , PrimaryKey]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Donate User Id"), NotNull, ForeignKey("WeiXinUser", "ID"), LeftJoin("jWeiXinUser")]
        public Int32? DonateUserId
        {
            get { return Fields.DonateUserId[this]; }
            set { Fields.DonateUserId[this] = value; }
        }

        [DisplayName("捐赠者昵称"), Expression("jWeiXinUser.[NickName]")]
        public String DonateNickName
        {
            get { return Fields.DonateNickName[this]; }
            set { Fields.DonateNickName[this] = value; }
        }

        [DisplayName("捐赠时间"), NotNull]
        public DateTime? DonatedTime
        {
            get { return Fields.DonatedTime[this]; }
            set { Fields.DonatedTime[this] = value; }
        }

        [DisplayName("Book Id"), NotNull, ForeignKey("PrivateBook","ID"), LeftJoin("jBook")]
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

        [DisplayName("捐赠方式"), NotNull]
        public Int32? DonationStyle
        {
            get { return Fields.DonationStyle[this]; }
            set { Fields.DonationStyle[this] = value; }
        }

        [DisplayName("捐赠留言"), Size(1073741823), NotNull]
        public String Comment
        {
            get { return Fields.Comment[this]; }
            set { Fields.Comment[this] = value; }
        }

        [DisplayName("是否已经受捐"), NotNull]
        public Boolean? IsReceived
        {
            get { return Fields.IsReceived[this]; }
            set { Fields.IsReceived[this] = value; }
        }

        [DisplayName("受捐单位"), Size(50), NotNull]
        public String Receiver
        {
            get { return Fields.Receiver[this]; }
            set { Fields.Receiver[this] = value; }
        }

        [DisplayName("受捐负责人"), Size(50), NotNull]
        public String Charger
        {
            get { return Fields.Charger[this]; }
            set { Fields.Charger[this] = value; }
        }

        [DisplayName("受捐日期"), NotNull]
        public DateTime? ReceivedTime
        {
            get { return Fields.ReceivedTime[this]; }
            set { Fields.ReceivedTime[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Comment; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DonationRecordRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public Int32Field DonateUserId;

            public StringField DonateNickName;

            public DateTimeField DonatedTime;

            public Int32Field BookId;

            public StringField BookName;

            public Int32Field DonationStyle;

            public StringField Comment;

            public BooleanField IsReceived;

            public StringField Receiver;

            public StringField Charger;

            public DateTimeField ReceivedTime;


		}
    }
}
