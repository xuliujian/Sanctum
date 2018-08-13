
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[BookFriendGroup]")]
    [DisplayName("书友群"), InstanceName("书友群")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BookFriendGroupRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), PrimaryKey, Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("群名称"), Size(50), NotNull, QuickSearch]
        public String GroupName
        {
            get { return Fields.GroupName[this]; }
            set { Fields.GroupName[this] = value; }
        }

        [DisplayName("拥有者"), NotNull, ForeignKey("WeiXinUser","ID"), LeftJoin("jWeiXinUser")]
        public Int32? OwnerId
        {
            get { return Fields.OwnerId[this]; }
            set { Fields.OwnerId[this] = value; }
        }

        [DisplayName("群主昵称"), Expression("jWeiXinUser.[NickName]")]
        public String OwnerNickName
        {
            get { return Fields.OwnerNickName[this]; }
            set { Fields.OwnerNickName[this] = value; }
        }

        [DisplayName("创建时间"), NotNull]
        public DateTime? CreatedTime
        {
            get { return Fields.CreatedTime[this]; }
            set { Fields.CreatedTime[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.GroupName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BookFriendGroupRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField GroupName;

            public Int32Field OwnerId;

            public StringField OwnerNickName;

            public DateTimeField CreatedTime;


		}
    }
}
