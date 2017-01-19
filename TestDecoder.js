/**
 * Created by Liukeyi on 2017/1/11.
 */
var a = "{\"logisticCompanyID\":\"DEPPON\",\"logisticID\":\"EMFD5475\",\"mailNo\":null,\"orderSource\":\"EWBMFD\",\"isRecommend\":null,\"serviceType\":\"2\",\"customerCode\":\"451184823\",\"customerID\":\"EWBMFD\",\"businessNetworkNo\":null,\"toNetworkNo\":null,\"sender\":{\"companyName\":\"麦富迪\",\"name\":\"乖宝宠物食品集团\",\"postCode\":\"252022\",\"phone\":\"010-12345678\",\"mobile\":\"18088888888\",\"province\":\"山东省\",\"city\":\"聊城市\",\"county\":\"东昌府区\",\"town\":\"蒋官屯镇\",\"address\":\"山东聊城东昌府区牡丹江路8号乖宝宠物食品集团\"},\"receiver\":{\"companyName\":null,\"name\":\"某某某\",\"phone\":null,\"mobile\":\"13288888888\",\"province\":\"湖北省\",\"city\":\"武汉市\",\"county\":null,\"town\":null,\"address\":\"娄底市冷水江市布溪检察院\"},\"gmtCommit\":\"2017-01-11 15:33:48\",\"cargoName\":\"宠物食品\",\"special\":null,\"totalNumber\":1,\"totalWeight\":4,\"totalVolume\":0.1,\"payType\":\"2\",\"transportType\":\"PACKAGE\",\"insuranceValue\":0,\"codValue\":0,\"codType\":null,\"reciveLoanAccount\":null,\"accountName\":null,\"vistReceive\":\"Y\",\"sendStartTime\":\"\\/Date(-62135596800000)\\/\",\"sendEndTime\":\"\\/Date(-62135596800000)\\/\",\"deliveryType\":\"3\",\"backSignBill\":\"0\",\"packageService\":\"纸\",\"smsNotify\":\"Y\",\"remark\":\"\",\"isOut\":\"N\"}";
var b = decodeURI(a);
var c = JSON.parse(b);
console.log(c);
//console.log(a);
