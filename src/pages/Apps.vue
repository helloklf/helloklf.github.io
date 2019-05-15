<template>
  <div class="page-apps">
    <div class="basic-info">
      <img class="app-logo" src="./Apps/scene.png" />
      <div class="app-title">Scene</div>
    </div>
    <div class="app-desc">
      <p>通过辅助服务，创建令人惊奇的玩机应用。根据你当前正在使用的APP，动态切换预先定义好的CPU、GPU性能配置。</p>
      <p>除此以外，Scene还是你管理应用程序的得力助手，如果你也是玩机爱好者，不妨试试看吧！</p>
    </div>
    <div class="app-screenshots">
      <img src="./Apps/Screenshot (1).png" />
      <img src="./Apps/Screenshot (2).png" />
      <img src="./Apps/Screenshot (3).png" />
      <img src="./Apps/Screenshot (4).png" />
    </div>
  </div>
</template>

<style lang="scss">
.page-apps {
  .basic-info {
    text-align: center;
    padding: 5em 0 3em 0;
    box-shadow: 0 0 0.5em rgba(128, 128, 128, 0.5);
    background-color: #fff;
    .app-logo {
      display: inline-block;
      height: 7em;
      width: 7em;
    }
    .app-title {
      margin-top: 0.5em;
      font-size: 1.5em;
    }
  }
  .app-desc {
    padding: 2em;
    text-indent: 2em;
    text-align: center;
    > p {
      line-height: 1.5em;
      white-space: pre-wrap;
      margin: 0 auto;
      max-width: 30em;
      text-align: left;
    }
  }
  .app-screenshots {
    text-align: center;
    img {
      display: inline-block;
      max-width: 95%;
      margin-bottom: 1em;
      box-shadow: 1px 1px 5px #ccc;
    }
  }
  @media screen and (min-width: 600px) {
    .app-screenshots {
      text-align: center;
      img {
        max-width: 35%;
      }
    }
  }
  @media screen and (min-width: 1280px) {
    .app-screenshots {
      text-align: center;
      img {
        max-width: 20%;
      }
    }
  }
}
</style>
