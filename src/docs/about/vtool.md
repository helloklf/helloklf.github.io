# 微工具箱 - 功能说明

- 使用本工具前，请确保你已经ROOT手机，并已安装busybox。你最好是个玩机专家，至少也该会刷机和修复系统。因为应用中部分高级功能可能会影响系统正常启动！！！
- 在骁龙835/821/820/625的设备上具有最佳体验，其它设备功能将受到限制。


## 


> dex2oat参数

```
VerifyNone，//跳过验证，但将所有类标记为已验证。
kVerifyAtRuntime，//将验证延迟到运行时，不要编译任何东西。
kVerifyProfile，//只验证配置文件中的类，只编译JNI存根。
kInterpretOnly，//验证一切，只编译JNI存根。
kTime，//编译方法，但是最小化编译时间。
kSpaceProfile，//根据配置文件最大限度地节省空间。
kSpace，//最大限度地节省空间。
kBalanced，//良好的编译投资回报。
kSpeedProfile，//根据配置文件最大化运行时性能。
kSpeed，//最大化运行时性能。
kEverythingProfile，//编译所有能够基于配置文件编译的东西。
kEverything，//编译能编译的所有东西。
```

**应用界面展示**


![](https://github.com/helloklf/vtools/raw/master/Screenshot/Screenshot_1.png)

![](https://github.com/helloklf/vtools/raw/master/Screenshot/Screenshot_2.png)

![](https://github.com/helloklf/vtools/raw/master/Screenshot/Screenshot_3.png)

![](https://github.com/helloklf/vtools/raw/master/Screenshot/Screenshot_4.png)
