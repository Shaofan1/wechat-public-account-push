/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxfc3a4f8b0495f27f',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '2ae900eb790e15236e30c364223e3a83',

  PROVINCE: '上海',
  CITY: '浦东新区',

  USERS: [
    {
      // 想要发送的人的名字
      name: '烧饭',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o0HK_6hAPx8n1fWJul3oM4fW2Wbg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'FmS08PpwWQ9fGna-4xiX3x1Ey54SdqlPrTXF6QZ1q0o',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-17',
      festivals: [
       // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '纪念日', name: '恋爱', year: '2017', date: '10-31',
        },
        {
          type: '生日', name: '麻椒', year: '1998', date: '12-17',
        },
        {
          type: '生日', name: '烧饭', year: '1998', date: '03-17',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2017-10-31' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '8YuJXFqq3yuyujHPP1pfFlkMkYtC_lCxx5ma7aaiU6A',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o0HK_6hAPx8n1fWJul3oM4fW2Wbg',
    }
  ],

}

module.exports = USER_CONFIG

