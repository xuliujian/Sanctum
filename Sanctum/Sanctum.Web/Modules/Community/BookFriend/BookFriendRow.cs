
namespace Sanctum.Community.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Community"), TableName("[dbo].[BookFriend]")]
    [DisplayName("书友"), InstanceName("书友")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BookFriendRow : Row, IIdRow
    {

        [DisplayName("Id"), Column("ID"), PrimaryKey, Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Group Id"), NotNull, Hidden, ForeignKey("BookFriendGroup", "ID"), LeftJoin("jFriendGroup")]
        public Int32? GroupId
        {
            get { return Fields.GroupId[this]; }
            set { Fields.GroupId[this] = value; }
        }

        [DisplayName("书友群名"), Expression("jFriendGroup.[GroupName]")]
        public String GroupName
        {
            get { return Fields.GroupName[this]; }
            set { Fields.GroupName[this] = value; }
        }

        [DisplayName("Member Id"), NotNull, ForeignKey("WeiXinUser","ID"), LeftJoin("jWeiXinUser")]
        public Int32? MemberId
        {
            get { return Fields.MemberId[this]; }
            set { Fields.MemberId[this] = value; }
        }

        [DisplayName("书友昵称"), Expression("jWeiXinUser.[NickName]")]
        public String MemberNickName
        {
            get { return Fields.MemberNickName[this]; }
            set { Fields.MemberNickName[this] = value; }
        }

        [DisplayName("状态"), NotNull]
        public Int32? Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("活跃指数"), NotNull]
        public Double? ActiveLevel
        {
            get { return Fields.ActiveLevel[this]; }
            set { Fields.ActiveLevel[this] = value; }
        }

        [NotNull, Hidden]
        public DateTime? JoinTime
        {
            get { return Fields.JoinTime[this]; }
            set { Fields.JoinTime[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BookFriendRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public Int32Field GroupId;

            public StringField GroupName;

            public Int32Field MemberId;

            public StringField MemberNickName;

            public Int32Field Status;

            public DoubleField ActiveLevel;

            public DateTimeField JoinTime;


		}
    }
}
