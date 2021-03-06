USE [SanctumDB]
GO
/****** Object:  Table [dbo].[Area]    Script Date: 2018/8/13 23:03:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Area](
	[ID] [varchar](50) NOT NULL,
	[PID] [varchar](50) NULL,
	[ShortName] [nvarchar](100) NULL,
	[Name] [nvarchar](100) NULL,
	[FullName] [nvarchar](255) NULL,
	[Level] [int] NULL,
	[PinYin] [varchar](100) NULL,
	[Code] [varchar](10) NULL,
	[ZipCode] [varchar](10) NULL,
	[FirstChar] [varchar](50) NULL,
	[Longitude] [decimal](18, 10) NULL,
	[Latitude] [decimal](18, 10) NULL,
 CONSTRAINT [PK__Area__3214EC27FD7AD8F7] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BookCategory]    Script Date: 2018/8/13 23:03:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookCategory](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[CategoryName] [nvarchar](10) NOT NULL,
	[ParentID] [int] NULL,
	[Remark] [nvarchar](max) NULL,
	[IsEnable] [bit] NOT NULL,
	[Creator] [int] NULL,
	[CreatedTime] [datetime] NULL,
	[Modifier] [int] NULL,
	[ModifiedTime] [datetime] NULL,
 CONSTRAINT [PK_BookCategory] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BookComment]    Script Date: 2018/8/13 23:03:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookComment](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[BookId] [int] NOT NULL,
	[CommentUserId] [int] NOT NULL,
	[ApprovalCount] [int] NULL,
	[CommentContent] [ntext] NOT NULL,
	[ReplyCommentId] [int] NOT NULL,
	[CommentTime] [datetime] NOT NULL,
 CONSTRAINT [PK_BookComment] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BookFriend]    Script Date: 2018/8/13 23:03:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookFriend](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[GroupId] [int] NOT NULL,
	[MemberId] [int] NOT NULL,
	[Status] [int] NOT NULL,
	[ActiveLevel] [float] NOT NULL,
	[JoinTime] [datetime] NOT NULL,
 CONSTRAINT [PK_BookFriend] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BookFriendGroup]    Script Date: 2018/8/13 23:03:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookFriendGroup](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[GroupName] [nvarchar](50) NOT NULL,
	[OwnerId] [int] NOT NULL,
	[CreatedTime] [datetime] NOT NULL,
 CONSTRAINT [PK_BookFriendGroup] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Bookshelf]    Script Date: 2018/8/13 23:03:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bookshelf](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[BookshelfName] [nvarchar](32) NOT NULL,
	[AdornBackground] [varchar](max) NULL,
	[Introduction] [nvarchar](max) NULL,
	[Creator] [int] NOT NULL,
	[CreatedTime] [datetime] NOT NULL,
	[Modifier] [int] NULL,
	[ModifiedTime] [datetime] NULL,
 CONSTRAINT [PK_Bookshelf] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BorrowApply]    Script Date: 2018/8/13 23:03:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BorrowApply](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ApplyBookId] [int] NOT NULL,
	[Applier] [int] NOT NULL,
	[ApplyTime] [datetime] NOT NULL,
	[ApplyStatus] [int] NOT NULL,
 CONSTRAINT [PK_BorrowApply] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BorrowRecord]    Script Date: 2018/8/13 23:03:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BorrowRecord](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[DebitUserId] [int] NOT NULL,
	[BorrowTime] [datetime] NOT NULL,
	[BookId] [int] NOT NULL,
	[BorrowRequirementId] [int] NOT NULL,
	[BorrowApplyId] [int] NOT NULL,
	[Status] [int] NOT NULL,
	[AcceptTime] [datetime] NULL,
	[RevertTime] [datetime] NOT NULL,
	[DebitRemarkContent] [nvarchar](100) NULL,
	[DebitRemarkTime] [datetime] NULL,
	[RenterRemarkContent] [nvarchar](100) NULL,
	[RenterRemarkTime] [datetime] NULL,
 CONSTRAINT [PK_BorrowRecord] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BorrowRequirement]    Script Date: 2018/8/13 23:03:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BorrowRequirement](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[PublisherID] [int] NOT NULL,
	[BookName] [nvarchar](100) NULL,
	[BookCategory] [nvarchar](100) NULL,
	[IsPaid] [bit] NOT NULL,
	[Status] [int] NOT NULL,
	[ViewCount] [int] NOT NULL,
	[PublishTime] [datetime] NULL,
 CONSTRAINT [PK_BorrowRequirement] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DonationRecord]    Script Date: 2018/8/13 23:03:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DonationRecord](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[DonateUserId] [int] NOT NULL,
	[DonatedTime] [datetime] NOT NULL,
	[BookId] [int] NOT NULL,
	[DonationStyle] [int] NOT NULL,
	[Comment] [ntext] NOT NULL,
	[IsReceived] [bit] NOT NULL,
	[Receiver] [nvarchar](50) NOT NULL,
	[Charger] [nvarchar](50) NOT NULL,
	[ReceivedTime] [datetime] NOT NULL,
 CONSTRAINT [PK_DonationRecord] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PersonalityAnalysis]    Script Date: 2018/8/13 23:03:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonalityAnalysis](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[FeatureName] [nvarchar](50) NOT NULL,
	[FeatureDecription] [ntext] NOT NULL,
	[MatchCategories] [nvarchar](max) NULL,
	[Creator] [int] NOT NULL,
	[CreatedTime] [datetime] NOT NULL,
	[Modifier] [int] NOT NULL,
	[ModifiedTime] [datetime] NOT NULL,
 CONSTRAINT [PK_PersonalityAnalysis] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PrivateBook]    Script Date: 2018/8/13 23:03:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PrivateBook](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[BookName] [nvarchar](50) NOT NULL,
	[BookCategories] [varchar](max) NOT NULL,
	[Author] [nvarchar](50) NULL,
	[Price] [float] NULL,
	[Publisher] [nvarchar](100) NULL,
	[CoverImage] [varchar](max) NULL,
	[RecommendLevel] [float] NULL,
	[Insight] [nvarchar](max) NULL,
	[Summary] [nvarchar](max) NULL,
	[NeedPaid] [bit] NULL,
	[BookshelfId] [int] NULL,
	[OffShelves] [bit] NULL,
	[Status] [int] NOT NULL,
	[Uploader] [int] NOT NULL,
	[UploadTime] [datetime] NOT NULL,
 CONSTRAINT [PK_PrivateBook] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RecommendBook]    Script Date: 2018/8/13 23:03:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RecommendBook](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[BookName] [nvarchar](100) NOT NULL,
	[BookCategory] [nvarchar](max) NOT NULL,
	[Author] [nvarchar](50) NULL,
	[Exponent] [float] NULL,
	[BookRemark] [ntext] NULL,
	[Instroduction] [ntext] NULL,
	[ViewCount] [int] NULL,
	[HeatLevel] [float] NULL,
	[Referrer] [int] NOT NULL,
	[ReferTime] [datetime] NOT NULL,
 CONSTRAINT [PK_RecommendBook] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WeiXinUser]    Script Date: 2018/8/13 23:03:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WeiXinUser](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[OpenId] [varchar](32) NOT NULL,
	[NickName] [nvarchar](32) NULL,
	[Country] [nvarchar](50) NULL,
	[Province] [nvarchar](50) NULL,
	[City] [nvarchar](50) NULL,
	[HeaderImage] [varchar](max) NOT NULL,
	[Mobile] [varchar](50) NULL,
	[Address] [nvarchar](max) NULL,
	[HonourRank] [float] NOT NULL,
	[KnowledgeRank] [float] NOT NULL,
	[PersonalityEval] [nvarchar](max) NULL,
	[HobbyCategory] [nvarchar](max) NULL,
	[ActiveLongitude] [decimal](18, 10) NULL,
	[ActiveLatitude] [decimal](18, 10) NULL,
	[LastActiveTime] [datetime] NULL,
 CONSTRAINT [PK_WeiXinUser] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Area] ADD  CONSTRAINT [DF__Area__PID__37A5467C]  DEFAULT (NULL) FOR [PID]
GO
ALTER TABLE [dbo].[Area] ADD  CONSTRAINT [DF__Area__ShortName__38996AB5]  DEFAULT (NULL) FOR [ShortName]
GO
ALTER TABLE [dbo].[Area] ADD  CONSTRAINT [DF__Area__Name__398D8EEE]  DEFAULT (NULL) FOR [Name]
GO
ALTER TABLE [dbo].[Area] ADD  CONSTRAINT [DF__Area__FullName__3A81B327]  DEFAULT (NULL) FOR [FullName]
GO
ALTER TABLE [dbo].[Area] ADD  CONSTRAINT [DF__Area__Level__3B75D760]  DEFAULT (NULL) FOR [Level]
GO
ALTER TABLE [dbo].[Area] ADD  CONSTRAINT [DF__Area__PinYin__3C69FB99]  DEFAULT (NULL) FOR [PinYin]
GO
ALTER TABLE [dbo].[Area] ADD  CONSTRAINT [DF__Area__Code__3D5E1FD2]  DEFAULT (NULL) FOR [Code]
GO
ALTER TABLE [dbo].[Area] ADD  CONSTRAINT [DF__Area__ZipCode__3E52440B]  DEFAULT (NULL) FOR [ZipCode]
GO
ALTER TABLE [dbo].[Area] ADD  CONSTRAINT [DF__Area__FirstChar__3F466844]  DEFAULT (NULL) FOR [FirstChar]
GO
ALTER TABLE [dbo].[Area] ADD  CONSTRAINT [DF__Area__Longitude__403A8C7D]  DEFAULT (NULL) FOR [Longitude]
GO
ALTER TABLE [dbo].[Area] ADD  CONSTRAINT [DF__Area__Latitude__412EB0B6]  DEFAULT (NULL) FOR [Latitude]
GO
ALTER TABLE [dbo].[BookComment] ADD  CONSTRAINT [DF__BookComme__Appro__4CA06362]  DEFAULT ((0)) FOR [ApprovalCount]
GO
