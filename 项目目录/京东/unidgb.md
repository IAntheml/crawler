# unidbg

以jd的sign/sv/st算法为例来讲解。

![image-20220623165929343](assets/image-20220623165929343.png)

![image-20220629121141707](assets/image-20220629121141707.png)



## 1.下载

在github上开源的项目：https://github.com/zhkl0228/unidbg

![image-20220623170633152](assets/image-20220623170633152.png)

![image-20220623170614967](assets/image-20220623170614967.png)



也可以去网盘，共享资料中下载：`unidbg-0.9.6.zip`

![image-20220623170839583](assets/image-20220623170839583.png)



## 2.打开项目

由于unidbg项目是由java编写的，所以需要用 **Intellij IDEA （学java基础时已安装）** 打开并操作。

<img src="assets/image-20220623171048798.png" alt="image-20220623171048798" style="zoom:33%;" />

![image-20220623171140394](assets/image-20220623171140394.png)

![image-20220623171401552](assets/image-20220623171401552.png)



## 3.实现jd算法



### 3.1 创建类

![image-20220629122434529](assets/image-20220629122434529.png)

```java
package com.sign;

import com.github.unidbg.AndroidEmulator;
import com.github.unidbg.linux.android.AndroidEmulatorBuilder;
import com.github.unidbg.linux.android.AndroidResolver;
import com.github.unidbg.linux.android.dvm.*;
import com.github.unidbg.memory.Memory;

import java.io.File;

public class EncryptUtils extends AbstractJni {
    private final AndroidEmulator emulator;
    private final VM vm;

    EncryptUtils() {
        // 1.创建模拟器（32位或64位），由jd的so文件在armeabi-v7a中，所以选择32位
        emulator = AndroidEmulatorBuilder.for32Bit().setProcessName("com.jingdong.app.mall").build();

        // 2.设置安卓sdk
        Memory memory = emulator.getMemory();
        memory.setLibraryResolver(new AndroidResolver(23));

        // 3.创建安卓虚拟机
        vm = emulator.createDalvikVM(new File("unidbg-android/jd/v10.4.4.apk"));
        vm.setJni(this);
        vm.setVerbose(true);

        // 4.加载so文件
        DalvikModule dm = vm.loadLibrary(new File("unidbg-android/jd/libjdbitmapkit.so"), false);
        //dm.callJNI_OnLoad(emulator);
    }


    public static void main(String[] args) {
        EncryptUtils obj = new EncryptUtils();
    }
}

```

注意：包和类可基于java规则随意取名。



### 3.2 执行函数

![image-20220629122734471](assets/image-20220629122734471.png)



### 3.3 补环境

#### 第1步

![image-20220629122827993](assets/image-20220629122827993.png)

```java
@Override
public DvmObject<?> newObjectV(BaseVM vm, DvmClass dvmClass, String signature, VaList vaList) {
    if(signature.equals("java/lang/StringBuffer-><init>()V")){
        return vm.resolveClass("java/lang/StringBuffer").newObject(new StringBuffer());
    }
    return super.newObjectV(vm, dvmClass, signature, vaList);
}
```



----

#### 第2步

![image-20220629123104022](assets/image-20220629123104022.png)



```java
@Override
public DvmObject<?> callObjectMethodV(BaseVM vm, DvmObject<?> dvmObject, String signature, VaList vaList) {
    if (signature.equals("java/lang/StringBuffer->append(Ljava/lang/String;)Ljava/lang/StringBuffer;")) {
        StringBuffer str = (StringBuffer) dvmObject.getValue();
        StringObject data = vaList.getObjectArg(0);
        return vm.resolveClass("java/lang/StringBuffer").newObject(str.append(data.getValue()));
    }
    return super.callObjectMethodV(vm, dvmObject, signature, vaList);
}
```



-----

#### 第3步

![image-20220629124400004](assets/image-20220629124400004.png)

```java
@Override
public DvmObject<?> newObjectV(BaseVM vm, DvmClass dvmClass, String signature, VaList vaList) {
    if (signature.equals("java/lang/StringBuffer-><init>()V")) {
        return vm.resolveClass("java/lang/StringBuffer").newObject(new StringBuffer());
    }
    if (signature.equals("java/lang/Integer-><init>(I)V")) {
        return vm.resolveClass("java/lang/Integer").newObject(vaList.getIntArg(0));
    }
    return super.newObjectV(vm, dvmClass, signature, vaList);
}
```



----

#### 第4步

![image-20220629124608820](assets/image-20220629124608820.png)

```java
@Override
public DvmObject<?> callObjectMethodV(BaseVM vm, DvmObject<?> dvmObject, String signature, VaList vaList) {
    if (signature.equals("java/lang/StringBuffer->append(Ljava/lang/String;)Ljava/lang/StringBuffer;")) {
        StringBuffer str = (StringBuffer) dvmObject.getValue();
        StringObject data = vaList.getObjectArg(0);
        return vm.resolveClass("java/lang/StringBuffer").newObject(str.append(data.getValue()));
    }
    if (signature.equals("java/lang/Integer->toString()Ljava/lang/String;")) {
        Integer iUse = (Integer) dvmObject.getValue();
        return new StringObject(vm, Integer.toString(iUse));
    }
    return super.callObjectMethodV(vm, dvmObject, signature, vaList);
}
```



----



#### 第5步

![image-20220629124755363](assets/image-20220629124755363.png)



```java
@Override
public DvmObject<?> callObjectMethodV(BaseVM vm, DvmObject<?> dvmObject, String signature, VaList vaList) {
    if (signature.equals("java/lang/StringBuffer->append(Ljava/lang/String;)Ljava/lang/StringBuffer;")) {
        StringBuffer str = (StringBuffer) dvmObject.getValue();
        StringObject data = vaList.getObjectArg(0);
        return vm.resolveClass("java/lang/StringBuffer").newObject(str.append(data.getValue()));
    }
    if (signature.equals("java/lang/Integer->toString()Ljava/lang/String;")) {
        Integer iUse = (Integer) dvmObject.getValue();
        return new StringObject(vm, Integer.toString(iUse));
    }
    if (signature.equals("java/lang/StringBuffer->toString()Ljava/lang/String;")) {
        StringBuffer str = (StringBuffer) dvmObject.getValue();
        return new StringObject(vm, str.toString());
    }
    return super.callObjectMethodV(vm, dvmObject, signature, vaList);
}
```



#### 最终实现

![image-20220629124956351](assets/image-20220629124956351.png)

![image-20220629125031975](assets/image-20220629125031975.png)

```java
package com.sign;

import com.github.unidbg.AndroidEmulator;
import com.github.unidbg.linux.android.AndroidEmulatorBuilder;
import com.github.unidbg.linux.android.AndroidResolver;
import com.github.unidbg.linux.android.dvm.*;
import com.github.unidbg.memory.Memory;

import java.io.File;

public class EncryptUtils extends AbstractJni {
    private final AndroidEmulator emulator;
    private final VM vm;

    EncryptUtils() {
        // 1.创建模拟器（32位或64位），由jd的so文件在armeabi-v7a中，所以选择32位
        emulator = AndroidEmulatorBuilder.for32Bit().setProcessName("com.jingdong.app.mall").build();

        // 2.设置安卓sdk
        Memory memory = emulator.getMemory();
        memory.setLibraryResolver(new AndroidResolver(23));

        // 3.创建安卓虚拟机
        vm = emulator.createDalvikVM(new File("unidbg-android/jd/v10.4.4.apk"));
        vm.setJni(this);
        //vm.setVerbose(true);
        vm.setVerbose(false);

        // 4.加载so文件
        DalvikModule dm = vm.loadLibrary(new File("unidbg-android/jd/libjdbitmapkit.so"), false);
        //dm.callJNI_OnLoad(emulator);
    }

    public String sign() {
        // 5.找到java中调用so的类和方法
        DvmClass cSignUtil = vm.resolveClass("com/jingdong/common/utils/BitmapkitUtils");
        String methodSign = "getSignFromJni()(Landroid/content/Context;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;";

        // 6.调用方法
        StringObject obj = cSignUtil.callStaticJniMethodObject(
                emulator,
                methodSign,
                null,
                new StringObject(vm, "backupKeywords"),
                new StringObject(vm, "{\"keyword\":\"五粮液\"}"),
                new StringObject(vm, "55c6428967d70488"),
                new StringObject(vm, "android"),
                new StringObject(vm, "10.4.4")
        );

        // 7.获取返回值
        return obj.getValue();
    }

    public static void main(String[] args) {
        EncryptUtils obj = new EncryptUtils();
        String result = obj.sign();
        System.out.println(result);
    }

    @Override
    public DvmObject<?> newObjectV(BaseVM vm, DvmClass dvmClass, String signature, VaList vaList) {
        if (signature.equals("java/lang/StringBuffer-><init>()V")) {
            return vm.resolveClass("java/lang/StringBuffer").newObject(new StringBuffer());
        }
        if (signature.equals("java/lang/Integer-><init>(I)V")) {
            return vm.resolveClass("java/lang/Integer").newObject(vaList.getIntArg(0));
        }
        return super.newObjectV(vm, dvmClass, signature, vaList);
    }

    @Override
    public DvmObject<?> callObjectMethodV(BaseVM vm, DvmObject<?> dvmObject, String signature, VaList vaList) {
        if (signature.equals("java/lang/StringBuffer->append(Ljava/lang/String;)Ljava/lang/StringBuffer;")) {
            StringBuffer str = (StringBuffer) dvmObject.getValue();
            StringObject data = vaList.getObjectArg(0);
            return vm.resolveClass("java/lang/StringBuffer").newObject(str.append(data.getValue()));
        }
        if (signature.equals("java/lang/Integer->toString()Ljava/lang/String;")) {
            Integer iUse = (Integer) dvmObject.getValue();
            return new StringObject(vm, Integer.toString(iUse));
        }
        if (signature.equals("java/lang/StringBuffer->toString()Ljava/lang/String;")) {
            StringBuffer str = (StringBuffer) dvmObject.getValue();
            return new StringObject(vm, str.toString());
        }
        return super.callObjectMethodV(vm, dvmObject, signature, vaList);
    }
}

```



### 3.4 处理参数

![image-20220629150539930](assets/image-20220629150539930.png)



### 3.5 打包

![image-20220629150843507](assets/image-20220629150843507.png)



![image-20220629150914907](assets/image-20220629150914907.png)



![image-20220629150935022](assets/image-20220629150935022.png)



![image-20220629151051518](assets/image-20220629151051518.png)





![image-20220629153235439](assets/image-20220629153235439.png)



![image-20220629153300782](assets/image-20220629153300782.png)



![image-20220629153353364](assets/image-20220629153353364.png)





最后将所需的 so和apk文件放入指定目录。

```
unidbg_parent_jar
├── apk-parser-2.6.4.jar
├── ...
├── slf4j-log4j12-1.7.26.jar
├── unicorn-1.0.12.jar
├── unidbg-android
│   └── jd
│       ├── libjdbitmapkit.so
│       └── v10.4.4.apk
└── unidbg-parent.jar
```

![image-20220629154244235](assets/image-20220629154244235.png)



### 3.6 Python调用执行

![image-20220629154743882](assets/image-20220629154743882.png)

```python
import uuid
import subprocess

function_id = "backupKeywords"
body = '{"keyword":"小米手机"}'
uid = str(uuid.uuid4()).replace("-", "")

cmd = f"java -jar  unidbg-parent.jar {function_id} '{body}' {uid}"
signature = subprocess.check_output(cmd, shell=True, cwd="unidbg_parent_jar")
data_string = signature.strip().decode('utf-8').split("\n")[-1]
print(data_string)
```























## 4.其他案例

### 4.1 车智赢（静态）

![image-20220629164301564](assets/image-20220629164301564.png)

![image-20220629164243940](assets/image-20220629164243940.png)

```java
package com.jd.v1044.sign;

import com.github.unidbg.AndroidEmulator;
import com.github.unidbg.linux.android.AndroidEmulatorBuilder;
import com.github.unidbg.linux.android.AndroidResolver;
import com.github.unidbg.linux.android.dvm.*;
import com.github.unidbg.linux.android.dvm.jni.ProxyClassFactory;
import com.github.unidbg.memory.Memory;

import java.io.File;

public class che extends AbstractJni {

    che() {

        // 1.创建模拟器（32位或64位），由jd的so文件在armeabi-v7a中，所以选择32位
        AndroidEmulator emulator = AndroidEmulatorBuilder.for32Bit().setProcessName("com.jingdong.app.mall").build();

        // 2.设置安卓sdk
        Memory memory = emulator.getMemory();
        memory.setLibraryResolver(new AndroidResolver(23));

        // 3.创建安卓虚拟机
        VM vm = emulator.createDalvikVM(new File("unidbg-android/che/atc241.apk"));
        vm.setJni(this);
        //vm.setVerbose(true);

        // 4.加载so文件
        DalvikModule dm = vm.loadLibrary(new File("unidbg-android/che/libnative-lib.so"), false);
        //dm.callJNI_OnLoad(emulator);

        // 5.找到方法并执行
        DvmClass CheckSignUtil = vm.resolveClass("com/autohome/ahkit/jni/CheckSignUtil");
        String method = "get3desKey()(Landroid/content/Context;)Ljava/lang/String;";
        StringObject obj = CheckSignUtil.callStaticJniMethodObject(
                emulator,
                method,
                vm.resolveClass("android/content/Context").newObject(null)
        );
        
        
        String keyString = obj.getValue();
        System.out.println(keyString);
    }


    public static void main(String[] args) {
        che obj = new che();
    }
}
```



### 4.2 得物app（动态）

![image-20220629164615158](assets/image-20220629164615158.png)

![image-20220629164635408](assets/image-20220629164635408.png)

```python
package com.jd.v1044.sign;

import com.github.unidbg.AndroidEmulator;
import com.github.unidbg.linux.android.AndroidEmulatorBuilder;
import com.github.unidbg.linux.android.AndroidResolver;
import com.github.unidbg.linux.android.dvm.*;
import com.github.unidbg.linux.android.dvm.array.ByteArray;
import com.github.unidbg.memory.Memory;

import java.io.File;

public class du extends AbstractJni {

    du() {

        // 1.创建模拟器（32位或64位），由jd的so文件在armeabi-v7a中，所以选择32位
        AndroidEmulator emulator = AndroidEmulatorBuilder.for32Bit().setProcessName("com.jingdong.app.mall").build();

        // 2.设置安卓sdk
        Memory memory = emulator.getMemory();
        memory.setLibraryResolver(new AndroidResolver(23));

        // 3.创建安卓虚拟机
        //VM vm = emulator.createDalvikVM();
        VM vm = emulator.createDalvikVM(new File("unidbg-android/du/4.74.5.apk"));
        vm.setJni(this);
        //vm.setVerbose(true);

        // 4.加载so文件
        DalvikModule dm = vm.loadLibrary(new File("unidbg-android/du/libJNIEncrypt.so"), false);
        dm.callJNI_OnLoad(emulator);

        // 5. -------> 找到方法并执行 getByteValues 方法 <--------
        DvmClass AESEncrypt = vm.resolveClass("com/duapp/aesjni/AESEncrypt");
        String method = "getByteValues()Ljava/lang/String;";
        StringObject byteValues = AESEncrypt.callStaticJniMethodObject(
                emulator,
                method
        );
        System.out.println(byteValues);
        
        String byteValuesString = byteValues.getValue();
        
        
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < byteValuesString.length(); i++) {
            if (byteValuesString.charAt(i) == '0') {
                sb.append('1');
            } else {
                sb.append('0');
            }
        }

        String sbString = sb.toString();
        System.out.println(sbString);


        // 5. -------> 找到方法并执行 encodeByte 方法 <--------
        String body = "loginTokenplatformandroidtimestamp1646748997088uuid5134632ab5e3cbf0v4.78.0";
        String methodEncodeBytes = "encodeByte([BLjava/lang/String;)Ljava/lang/String;";
        StringObject data = AESEncrypt.callStaticJniMethodObject(
                emulator,
                methodEncodeBytes,
                new ByteArray(vm, body.getBytes()),
                new StringObject(vm, sbString)
        );
        System.out.println(data);
    }


    public static void main(String[] args) {
        du obj = new du();
    }
}
```



### 4.3 B站（动态）

![image-20220629164950209](assets/image-20220629164950209.png)



![image-20220629165118058](assets/image-20220629165118058.png)

```python
package com.jd.v1044.sign;

import com.github.unidbg.AndroidEmulator;
import com.github.unidbg.linux.android.AndroidEmulatorBuilder;
import com.github.unidbg.linux.android.AndroidResolver;
import com.github.unidbg.linux.android.dvm.*;
import com.github.unidbg.linux.android.dvm.jni.ProxyDvmObject;
import com.github.unidbg.memory.Memory;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.util.Map;
import java.util.SortedMap;
import java.util.TreeMap;


class SignedQuery {

    public static final String KEY_VALUE_DELIMITER = "=";
    public static final String FIELD_DELIMITER = "&";

    private static final char[] a = "0123456789ABCDEF".toCharArray();
    public final String rawParams;
    public final String sign;

    public SignedQuery(String str, String str2) {
        this.rawParams = str;
        this.sign = str2;
    }

    private static boolean a(char c2, String str) {
        return (c2 >= 'A' && c2 <= 'Z') || (c2 >= 'a' && c2 <= 'z') || !((c2 < '0' || c2 > '9') && "-_.~".indexOf(c2) == -1 && (str == null || str.indexOf(c2) == -1));
    }

    static String b(String str) {
        return c(str, null);
    }

    static String c(String str, String str2) {
        StringBuilder sb = null;
        if (str == null) {
            return null;
        }
        int length = str.length();
        int i = 0;
        while (i < length) {
            int i2 = i;
            while (i2 < length && a(str.charAt(i2), str2)) {
                i2++;
            }
            if (i2 != length) {
                if (sb == null) {
                    sb = new StringBuilder();
                }
                if (i2 > i) {
                    sb.append((CharSequence) str, i, i2);
                }
                i = i2 + 1;
                while (i < length && !a(str.charAt(i), str2)) {
                    i++;
                }
                try {
                    byte[] bytes = str.substring(i2, i).getBytes("UTF-8");
                    int length2 = bytes.length;
                    for (int i3 = 0; i3 < length2; i3++) {
                        sb.append('%');
                        char[] cArr = a;
                        sb.append(cArr[(bytes[i3] & 240) >> 4]);
                        sb.append(cArr[bytes[i3] & 15]);
                    }
                } catch (UnsupportedEncodingException e2) {
                    throw new AssertionError(e2);
                }
            } else if (i == 0) {
                return str;
            } else {
                sb.append((CharSequence) str, i, length);
                return sb.toString();
            }
        }
        return sb == null ? str : sb.toString();
    }

    static String r(Map<String, String> map) {
        if (!(map instanceof SortedMap)) {
            map = new TreeMap(map);
        }
        StringBuilder sb = new StringBuilder(256);
        for (Map.Entry<String, String> entry : map.entrySet()) {
            String key = entry.getKey();
            if (!key.isEmpty()) {
                sb.append(b(key));
                sb.append(KEY_VALUE_DELIMITER);
                String value = entry.getValue();
                sb.append(value == null ? "" : b(value));
                sb.append(FIELD_DELIMITER);
            }
        }
        int length = sb.length();
        if (length > 0) {
            sb.deleteCharAt(length - 1);
        }
        if (length == 0) {
            return null;
        }
        return sb.toString();
    }

    public String toString() {
        String str = this.rawParams;
        if (str == null) {
            return "";
        }
        if (this.sign == null) {
            return str;
        }
        return this.rawParams + "&sign=" + this.sign;
    }
}

public class bili extends AbstractJni {

    bili() {

        // 1.创建模拟器（32位或64位），由jd的so文件在armeabi-v7a中，所以选择32位
        AndroidEmulator emulator = AndroidEmulatorBuilder.for32Bit().setProcessName("com.jingdong.app.mall").build();

        // 2.设置安卓sdk
        Memory memory = emulator.getMemory();
        memory.setLibraryResolver(new AndroidResolver(23));

        // 3.创建安卓虚拟机
        //VM vm = emulator.createDalvikVM();
        VM vm = emulator.createDalvikVM(new File("unidbg-android/bili/v6240.apk"));
        vm.setJni(this);
        //vm.setVerbose(true);

        // 4.加载so文件
        DalvikModule dm = vm.loadLibrary(new File("unidbg-android/bili/libbili.so"), false);
        dm.callJNI_OnLoad(emulator);


//        DvmClass LibBili = vm.resolveClass("com/bilibili/nativelibrary/LibBili");
//        String method = "a(Ljava/lang/String;)Ljava/lang/String;";
//        StringObject byteValues = LibBili.callStaticJniMethodObject(
//                emulator,
//                method,
//                new StringObject(vm,"xxxx")
//        );
//        System.out.println(byteValues);


//        DvmClass LibBili = vm.resolveClass("com/bilibili/nativelibrary/LibBili");
//        String method = "getCpuCount()I";
//        //String method = "getCpuId()I";
//        int byteValues = LibBili.callStaticJniMethodInt(
//                emulator,
//                method
//        );
//        System.out.println(byteValues);


        // 5.找到方法并执行 getByteValues 方法
        SortedMap<String, String> map = new TreeMap<String, String>();
        map.put("actual_played_time", "0");
        map.put("aid", "466565149");
        map.put("appkey", "1d8b6e7d45233436");
        map.put("auto_play", "0");
        map.put("ts", "1647952932");

        DvmClass LibBili = vm.resolveClass("com/bilibili/nativelibrary/LibBili");
        String method = "s(Ljava/util/SortedMap;)Lcom/bilibili/nativelibrary/SignedQuery;";
        DvmObject<SignedQuery> byteValues = LibBili.callStaticJniMethodObject(
                emulator,
                method,
                ProxyDvmObject.createObject(vm, map)
        );
        System.out.println(byteValues.getValue().toString());


    }

    @Override
    public boolean callBooleanMethod(BaseVM vm, DvmObject<?> dvmObject, String signature, VarArg varArg) {
        if (signature.equals("java/util/Map->isEmpty()Z")) {
            return false;
        }
        return super.callBooleanMethod(vm, dvmObject, signature, varArg);
    }

    @Override
    public DvmObject<?> callObjectMethod(BaseVM vm, DvmObject<?> dvmObject, String signature, VarArg varArg) {

        if (signature.equals("java/util/Map->get(Ljava/lang/Object;)Ljava/lang/Object;")) {
            StringObject group = varArg.getObjectArg(0);
            String key = group.getValue();

            SortedMap<String, String> map = (SortedMap<String, String>) dvmObject.getValue();
            String value = map.get(key);
            return new StringObject(vm, value);
        }

        return super.callObjectMethod(vm, dvmObject, signature, varArg);
    }

    @Override
    public DvmObject<?> callStaticObjectMethod(BaseVM vm, DvmClass dvmClass, String signature, VarArg varArg) {
        if (signature.equals("com/bilibili/nativelibrary/SignedQuery->r(Ljava/util/Map;)Ljava/lang/String;")) {
            DvmObject<?> mapObject = varArg.getObjectArg(0);
            TreeMap<String, String> mymap = (TreeMap<String, String>) mapObject.getValue();
            String value = SignedQuery.r(mymap);
            return new StringObject(vm, value);
        }

        return super.callStaticObjectMethod(vm, dvmClass, signature, varArg);
    }

    @Override
    public DvmObject<?> newObject(BaseVM vm, DvmClass dvmClass, String signature, VarArg varArg) {

        if (signature.equals("com/bilibili/nativelibrary/SignedQuery-><init>(Ljava/lang/String;Ljava/lang/String;)V")) {
            String arg0 = (String) varArg.getObjectArg(0).getValue();
            String arg1 = (String) varArg.getObjectArg(1).getValue();

            return vm.resolveClass("com/bilibili/nativelibrary/SignedQuery").newObject(new SignedQuery(arg0, arg1));
        }
        return super.newObject(vm, dvmClass, signature, varArg);
    }

    public static void main(String[] args) {
        bili obj = new bili();
    }
}
```



### 4.4 知乎（静态）

![image-20220629165429792](assets/image-20220629165429792.png)



![image-20220629165446003](assets/image-20220629165446003.png)

```java
package com.jd.v1044.sign;

import com.github.unidbg.AndroidEmulator;
import com.github.unidbg.linux.android.AndroidEmulatorBuilder;
import com.github.unidbg.linux.android.AndroidResolver;
import com.github.unidbg.linux.android.dvm.*;
import com.github.unidbg.linux.android.dvm.array.ByteArray;
import com.github.unidbg.memory.Memory;

import java.io.File;

public class zhihu extends AbstractJni {

    zhihu() {

        // 1.创建模拟器（32位或64位），由jd的so文件在armeabi-v7a中，所以选择32位
        AndroidEmulator emulator = AndroidEmulatorBuilder.for32Bit().setProcessName("com.jingdong.app.mall").build();

        // 2.设置安卓sdk
        Memory memory = emulator.getMemory();
        memory.setLibraryResolver(new AndroidResolver(23));

        // 3.创建安卓虚拟机
        VM vm = emulator.createDalvikVM(new File("unidbg-android/zhihu/v5321.apk"));
        vm.setJni(this);
        //vm.setVerbose(true);


        // 4.加载so文件
        DalvikModule dm = vm.loadLibrary(new File("unidbg-android/zhihu/libencrypt.so"), false);
        dm.callJNI_OnLoad(emulator);

        // 5.找到方法并执行 getByteValues 方法
        DvmClass CloudIDHelper = vm.resolveClass("com/zhihu/android/cloudid/CloudIDHelper");
        String method = "encrypt(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;";

        StringObject byteValues = CloudIDHelper.newObject(null).callJniMethodObject(
                emulator,
                method,
                new StringObject(vm,"2"),
                null,
                null,
                new StringObject(vm,"app_build=1031&app_version=5.32.1&bt_ck=1&bundle_id=com.zhihu.android&cp_ct=8&cp_fq=2016000&cp_tp=0&cp_us=100.0&d_n=Redmi%208A&fr_mem=197&fr_st=36503&latitude=0.0&longitude=0.0&mc_ad=E0%3A1F%3A88%3AAA%3AB3%3A39&mcc=cn&nt_st=1&ph_br=Xiaomi&ph_md=Redmi%208A&ph_os=Android%2010&ph_sn=unknown&pvd_nm=%E4%B8%AD%E5%9B%BD%E8%81%94%E9%80%9A&tt_mem=256&tt_st=51140&tz_of=28800"),
                new StringObject(vm,"1355"),
                new StringObject(vm,"1648126419"),
                new StringObject(vm,"dd49a835-56e7-4a0f-95b5-efd51ea5397f")
        );
        System.out.println(byteValues);
    }


    public static void main(String[] args) {
        zhihu obj = new zhihu();
    }
}
```



### 4.5 抖音（动态）

![image-20220629182835777](assets/image-20220629182835777.png)

![image-20220629182859153](assets/image-20220629182859153.png)



```java
package com.jd.v1044.sign;

import com.github.unidbg.AndroidEmulator;
import com.github.unidbg.linux.android.AndroidEmulatorBuilder;
import com.github.unidbg.linux.android.AndroidResolver;
import com.github.unidbg.linux.android.dvm.*;
import com.github.unidbg.linux.android.dvm.array.ByteArray;
import com.github.unidbg.memory.Memory;

import java.io.File;
import java.util.Arrays;

public class douyin extends AbstractJni {
    VM vm;
    AndroidEmulator emulator;

    douyin() {

        // 1.创建模拟器（32位或64位），由jd的so文件在armeabi-v7a中，所以选择32位
        emulator = AndroidEmulatorBuilder.for32Bit().setProcessName("com.jingdong.app.mall").build();

        // 2.设置安卓sdk
        Memory memory = emulator.getMemory();
        memory.setLibraryResolver(new AndroidResolver(23));

        // 3.创建安卓虚拟机
        //VM vm = emulator.createDalvikVM();
        vm = emulator.createDalvikVM(new File("unidbg-android/douyin/v11.5.0.apk"));
        vm.setJni(this);
        vm.setVerbose(true);

        // 4.加载so文件
        DalvikModule dm = vm.loadLibrary(new File("unidbg-android/douyin/libEncryptor.so"), false);
        dm.callJNI_OnLoad(emulator);


    }

    public void ttEncrypt() {
        String body = "loginTokenplatformandroidtimestamp1646748997088uuid5134632ab5e3cbf0v4.78.0";
        DvmClass AESEncrypt = vm.resolveClass("com/bytedance/frameworks/encryptor/EncryptorUtil");
        String method = "ttEncrypt([BI)[B";
        ByteArray byteValues = AESEncrypt.callStaticJniMethodObject(
                emulator,
                method,
                new ByteArray(vm, body.getBytes()),
                body.getBytes().length
        );
        System.out.println(Arrays.toString(byteValues.getValue()));
    }


    public static void main(String[] args) {
        douyin obj = new douyin();
        obj.ttEncrypt();
    }
}
```











