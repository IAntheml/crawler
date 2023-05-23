function hook_create() {
    Java.perform(function () {
        var AppLog = Java.use("com.ss.android.common.applog.AppLog");
        AppLog.getLogEncryptSwitch.implementation = function () {
            var res = this.getLogEncryptSwitch();
            console.log(res);
            return false;
        }
    });
}

setImmediate(hook_create)

// frida -U --no-pause -f com.ss.android.ugc.aweme -l hook_body.js
