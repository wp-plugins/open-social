=== Open Social for China ===

Contributors: playes
Donate link: https://me.alipay.com/playes
Tags: china, chinese, afly, social, login, connect, qq, sina, weibo, baidu, google, live, douban, renren, kaixin001, openid, QQ登陆, 新浪微博, 百度, 谷歌, 豆瓣, 人人网, 开心网, 登录, 连接, 注册
Requires at least: 3.0
Tested up to: 3.7.1
Stable tag: 1.0.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Allow to Login or Share with social networks (specially in china) like QQ, Sina WeiBo, Baidu, Google, Live, DouBan, RenRen, KaiXin. NO 3rd-party!

== Description ==

**Open Social Login/Share for China 国内社交网站登陆及分享**

Allow to Login or Share with social networks (specially in china) like QQ, Sina WeiBo, Baidu, Google, Live, DouBan, RenRen, KaiXin. NO 3rd-party! Show and Post should be Next.

可用社交网站（特别是国内）如腾讯QQ、新浪微博、百度、谷歌、微软LIVE、豆瓣、人人网、开心网登录网站并绑定帐号的一个插件，无第三方平台、无接口文件冗余、带昵称网址头像等；设置简单，绿色低碳。分享功能可以定制，无需任何第三方或脚本加载，无需第三方脚本的极速加载。

适合 **不喜第三方平台接入、不喜任何一个多余脚本、不喜任何一行多余代码、有一定手动折腾能力** 的 WPer。

More information please visit my site: [www.xiaomac.com](http://www.xiaomac.com/201311150.html).

**Make it Socialize, Make it Simplicity, Make it NO 3RD-Party!**

**简单流程说明：**

*游客点击登陆按钮（如QQ），登陆并授权后————会自动在后台新建一个用户：*

*   用户名：QQ+OpenID（如：QQ123123123，用户唯一而且不会改变）
*   密码：系统自动随机生成（理论上用户不会用到后台或密码，他们直接使用QQ号码登陆。目前可以进入资料页，后面打算屏蔽）
*   昵称：QQ昵称（不限）
*   角色：为系统默认新建（默认为订阅者）
*   邮箱：OpenID#t.qq.com（因接口无法取得用户真实QQ号或邮箱，此邮箱为虚假的，仅为标识或筛选用）
*   主页：t.qq.com/WeiBoID（如果有开通腾讯微博的话，否则为空）
*   头像：会自动沿用QQ的头像
*   工具条：默认屏蔽（尽量不对用户提供后台，他们只是管理评论和有自己的真像而已）

== Installation ==

1. Upload the plugin folder to the "/wp-content/plugins/" directory of your WordPress site,
2. Activate the plugin through the 'Plugins' menu in WordPress,
3. Visit the "Settings\Open Social Login" administration page to setup the plugin. 

或者:

1. 直接在 WorePress 后台搜索 open-social 在线安装，并启用。
2. 然后在设置页面“登陆平台设置”配置几个平台的 APP ID、APP KEY 即可。
3. 卸载也同样方便，直接删除即可，无任何数据库残留！

== Frequently Asked Questions ==

= Why This One #1? 官方上已有大把这种插件，这个有什么特殊么？ =

官方上大部分是适合国外的平台和接口；有国内做的，但要么都是第三方平台中转、要么是残缺陈旧老版本+收费新版本，我个人是不会用的。
所以折腾了这个适合国内，免费、开放、不冗余的登陆接口。

= Why This One #2? 绑定帐号后可以自动同步文章或评论么？ =

目前没有做这个功能，感觉不够实用。要实现也很简单，代码中提供了一个接口，有需要的朋友可以参照官方API说明自行拓展。不排除后面的版本会加强这个功能。

= Why This One #3? 带分享功能么？ =

带。

= Why This One #4? 带多国语言么？ =

带简体中文。

== Screenshots ==

1. Front Page
2. Widgets
3. Setting

== Changelog ==

= 1.0.2 =
* become a brand new plugin, not only LOGIN thing.

= 1.0.1 =
* 增加多LIVE、豆瓣、人人网、开心网
* 精简大量代码

= 1.0.0 =
* 第一个版本
