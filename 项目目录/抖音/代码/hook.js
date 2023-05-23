    Java.perform(function () {
        var AppLog = Java.use("com.ss.android.common.applog.AppLog");
        AppLog.getLogEncryptSwitch.implementation = function () {
            var res = this.getLogEncryptSwitch();
            console.log(res);
            return false;
        }
    });
