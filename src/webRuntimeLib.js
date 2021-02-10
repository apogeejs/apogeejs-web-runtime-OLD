import "/apogeejs-model-lib/src/webGlobals.js";
import "/apogeejs-model-lib/src/debugHook.js";

export {ApogeeWebView} from "/apogeejs-webview-lib/src/apogeeWebViewLib.js";

//expose these apogee libraries globally so plugins can use them
import apogeeutil from "/apogeejs-util-lib/src/apogeeUtilLib.js";
import * as apogeebase from "/apogeejs-base-lib/src/apogeeBaseLib.js";
import * as apogee from "/apogeejs-model-lib/src/apogeeModelLib.js";
import * as apogeeapp from "/apogeejs-app-lib/src/apogeeAppLib.js";
import * as apogeeui from "/apogeejs-ui-lib/src/apogeeUiLib.js";
import * as apogeeview from "/apogeejs-view-lib/src/apogeeViewLib.js";
window.apogeeutil = apogeeutil;
window.apogeebase = apogeebase;
window.apogee = apogee;
window.apogeeapp = apogeeapp;
window.apogeeui = apogeeui;
window.apogeeview = apogeeview;

//implementation of global alert functions
//__globals__.apogeeLog = (msg) => console.log(message);
__globals__.apogeeUserAlert = (msg) => apogeeui.showSimpleActionDialog(msg,null,["OK"]);
__globals__.apogeeUserConfirm = (msg,okText,cancelText,okAction,cancelAction,defaultToOk) => apogeeui.showSimpleActionDialog(msg,null,[okText,cancelText],[okAction,cancelAction]);
__globals__.apogeeUserConfirmSynchronous = (msg,okText,cancelText,defaultToOk) => confirm(msg);

//initialize resource path
const INCLUDE_BASE_PATH = "";
const INCLUDE_PATH_INFO = {
    "resources": INCLUDE_BASE_PATH + "/apogeejs-admin/resources",
    "aceIncludes": INCLUDE_BASE_PATH + "/apogeejs-admin/ext/ace/ace_1.4.3/ace_includes"
};
apogeeview.initIncludePath(INCLUDE_PATH_INFO);