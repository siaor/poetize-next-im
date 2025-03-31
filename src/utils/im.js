import Tiows from "./tiows";
import {ElMessage} from "element-plus";

export default function () {
  this.ws_protocol = location.protocol === "http:" ? "ws" : "wss";
  this.ip = localStorage.getItem("wsURL");
  this.port = localStorage.getItem("wsPort");
  this.paramStr = 'Authorization=' + localStorage.getItem("userToken");
  this.binaryType = 'blob';

  this.initWs = () => {
    this.tio = new Tiows(this.ws_protocol, this.ip, this.port, this.paramStr, this.binaryType);
    this.tio.connect();
  }

  this.sendMsg = (value) => {
    if (this.tio && this.tio.ws && this.tio.ws.readyState === 1) {
      this.tio.send(value);
      return true;
    } else {
      ElMessage({
        message: "发送失败，请重试！",
        type: 'error'
      });
      return false;
    }
  }
}
