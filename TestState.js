/**
 * Created by Liukeyi on 2016/6/6.
 */
var State = function() {};
State.prototype.download = function() {
    throw new Error('This method must be overwritten');
};
State.prototype.pause = function() {
    throw new Error('This method must be overwritten');
};
State.prototype.fail = function() {
    throw new Error('This method must be overwritten');
};
State.prototype.finish = function() {
    throw new Error('This method must be overwritten');
};

var ReadyState = function(oDownload) {
    State.apply(this);
    this.oDownload = oDownload;
};
ReadyState.prototype = new State();
ReadyState.prototype.download = function() {
    this.oDownload.setState(this.oDownload.getDownloadState());
    console.log("Start Download!");
};
ReadyState.prototype.pause = function() {
    throw new Error('Cannot pause coz the download is not started!');
};
ReadyState.prototype.fail = function() {
    throw new Error('Cannot fail coz the download is not started!');
};
ReadyState.prototype.finish = function() {
    throw new Error('Cannot finish coz the download is not started!');
};

var Download = function() {
    this.oState = new ReadyState(this);
};

Download.prototype.setState = function (oState) {
    this.oState = oState;
};

// 对外暴露的四个公共方法，以便外部调用

Download.prototype.download = function () {
    this.oState.download();
};

Download.prototype.pause = function () {
    this.oState.pause();
};

Download.prototype.fail = function () {
    this.oState.fail();
};

Download.prototype.finish = function () {
    this.oState.finish();
};

//获取各种状态，传入当前this对象
Download.prototype.getReadyState = function () {
    return new ReadyState(this);
};

Download.prototype.getDownloadingState = function () {
    return new DownloadingState(this);
};

Download.prototype.getDownloadPausedState = function () {
    return new DownloadPausedState(this);
};

Download.prototype.getDownloadedState = function () {
    return new DownloadedState(this);
};

Download.prototype.getDownloadedFailedState = function () {
    return new DownloadFailedState(this);
};

var DownloadingState = function (oDownload) {
    State.apply(this);
    this.oDownload = oDownload;
};

DownloadingState.prototype = new State();

DownloadingState.prototype.download = function () {
    throw new Error("文件已经正在下载中了!");
};

DownloadingState.prototype.pause = function () {
    this.oDownload.setState(this.oDownload.getDownloadPausedState());
    console.log("暂停下载!");
};

DownloadingState.prototype.fail = function () {
    this.oDownload.setState(this.oDownload.getDownloadedFailedState());
    console.log("下载失败!");
};

DownloadingState.prototype.finish = function () {
    this.oDownload.setState(this.oDownload.getDownloadedState());
    console.log("下载完毕!");
};

var DownloadPausedState = function (oDownload) {
    State.apply(this);
    this.oDownload = oDownload;
};

DownloadPausedState.prototype = new State();

DownloadPausedState.prototype.download = function () {
    this.oDownload.setState(this.oDownload.getDownloadingState());
    console.log("继续下载!");
};

DownloadPausedState.prototype.pause = function () {
    throw new Error("已经暂停了，咋还要暂停呢!");
};

DownloadPausedState.prototype.fail = function () { this.oDownload.setState(this.oDownload.getDownloadedFailedState());
    console.log("下载失败!");
};

DownloadPausedState.prototype.finish = function () {
    this.oDownload.setState(this.oDownload.getDownloadedState());
    console.log("下载完毕!");
};

var DownloadedState = function (oDownload) {
    State.apply(this);
    this.oDownload = oDownload;
};

DownloadedState.prototype = new State();

DownloadedState.prototype.download = function () {
    this.oDownload.setState(this.oDownload.getDownloadingState());
    console.log("重新下载!");
};

DownloadedState.prototype.pause = function () {
    throw new Error("对下载完了，还暂停啥？");
};

DownloadedState.prototype.fail = function () {
    throw new Error("都下载成功了，咋会失败呢？");
};

DownloadedState.prototype.finish = function () {
    throw new Error("下载成功了，不能再为成功了吧!");
};
var DownloadFailedState = function (oDownload) {
    State.apply(this);
    this.oDownload = oDownload;
};

DownloadFailedState.prototype = new State();

DownloadFailedState.prototype.download = function () {
    this.oDownload.setState(this.oDownload.getDownloadingState());
    console.log("尝试重新下载!");
};

DownloadFailedState.prototype.pause = function () {
    throw new Error("失败的下载，也不能暂停!");
};

DownloadFailedState.prototype.fail = function () {
    throw new Error("都失败了，咋还失败呢!");
};

DownloadFailedState.prototype.finish = function () {
    throw new Error("失败的下载，肯定也不会成功!");
};
