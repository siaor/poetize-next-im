export default {
  // 测试环境
  // baseURL: "http://localhost:8081",
  // webBaseURL: "http://localhost",
  // imURL: "http://localhost:81/im",
  // imBaseURL: "localhost",
  // wsProtocol: "ws",
  // wsPort: "9324",

  // 生产环境
  baseURL: location.protocol + "//" + location.hostname + (location.port ? ':' + location.port : '') + "/api",
  webBaseURL: location.protocol + "//" + location.hostname + (location.port ? ':' + location.port : ''),
  imURL: location.protocol + "//" + location.hostname + (location.port ? ':' + location.port : '') + "/im",
  imBaseURL: location.hostname + (location.port ? ':' + location.port : ''),
  wsProtocol: location.protocol === "http:" ? "ws" : "wss",
  wsPort: "",

  webHistory: "/im/",
  hitokoto: "https://v1.hitokoto.cn",
  jinrishici: "https://v1.jinrishici.com/all.json",
  jitang: "https://api.oick.cn/dutang/api.php",
  shehui: "https://api.oick.cn/yulu/api.php",
  yiyan: "https://api.oick.cn/yiyan/api.php",
  dog: "https://api.oick.cn/dog/api.php",

  //前后端定义的密钥，AES使用16位
  cryptojs_key: "poetize-next2025",

  before_color_1: "black",
  after_color_1: "linear-gradient(45deg, #f43f3b, #ec008c)",

  before_color_2: "rgb(131, 123, 199)",
  after_color_2: "linear-gradient(45deg, #f43f3b, #ec008c)",

  tree_hole_color: ["rgb(180, 224, 255)", "rgb(180, 203, 255)", "rgb(246, 223, 255)", "rgb(255, 214, 198)", "rgb(255, 205, 143)", "rgb(238, 255, 143)", "rgb(220, 255, 165)", "rgb(164, 234, 192)", "rgb(202, 241, 233)", "rgb(230, 230, 250)"],

  emojiList: ['嘻嘻', '笑哭了', '哈哈', '大笑', '苦笑', '笑翻', '天使笑', '恶魔笑', '眨眼', '冷漠', '无语', '不高兴', '流汗', '沉思', '困扰', '困惑', '亲亲', '飞吻', '笑着亲', '生气', '愤怒', '想哭', '痛苦', '傲慢', '失望', '啊', '啊？', '害怕', '累死了', '冷汗']
}
