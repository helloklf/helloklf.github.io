<template>
  <div class="page-opensource">
    <div class="userinfo">
      <div><img src="https://avatars3.githubusercontent.com/u/24519509?s=460&v=4" alt=""></div>
      <div>
        <div class="name">kuanglinfei</div>
        <div class="username">helloklf</div>
        <div class="github"><a href="https://github.com/helloklf">https://github.com/helloklf</a></div>
      </div>
    </div>
    <div class="projects">
      <div v-for="(project, $index) in projects" :key="$index" class="project-item">
        <div class="title"><a :href="project.url">{{project.title}}</a></div>
        <div class="desc">{{project.desc}}</div>
        <div class="infos">
          <div class="links">
            <a :href="project.git"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg> <span>Git</span></a>
            <a v-if="project.route" @click="details(project)">详情</a>
          </div>
          <div :class="'type ' + project.type || ''">{{project.type}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from '@/docs/opensource.js'
export default {
  data () {
    return {
      projects: Projects
    }
  },
  methods: {
    details (project) {
      if (project.route && this.$router) {
        this.$router.push(project.route)
      }
    }
  }
}
</script>

<style lang="scss">
.page-opensource {
  .userinfo {
    text-align: center;
    font-size: 3em;
    color: #444;
    padding-bottom: 1em;
    .name {
    }
    .username {
      font-size: 0.7em;
      opacity: 0.6;
    }
    .github {
      margin-top: 0.5em;
      font-size: 0.5em;
      a {
        text-decoration: none;
        color: #0366d6;
      }
    }
    img {
      background: #f8f8f8;
      border-radius: 50%;
      box-shadow: 0 0 3px #ccc;
      margin-top: 1em;
      width: 96px;
      height: 96px;
      max-width: 100%;
    }
  }
  .project-item {
    margin: 0.5em;
    font-size: 1.3em;
    box-shadow: 0 0 2px #ccc;
    padding: 0.5em;
    color: #333;
    .title {
      font-size: 1.6em;
      line-height: 1.5em;
      font-family: '等线';
      a {
        color: #000;
      }
    }
    .desc {
      margin-top: 0.4em;
      line-height: 1.6em;
      color: #888;
      min-height: 5em;
    }
    a {
      display: block;
      min-width: 3em;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: none;
      white-space: nowrap;
      color: #888;
      text-decoration: none;
    }
    .infos {
      display: flex;
      flex-direction: row;
      align-content: center;
      align-items: center;
      margin-top: 0.5em;
      .links {
        flex: 1;
        overflow: hidden;
        a {
          display: inline-block;
          margin-right: 1em;
          > *{
            vertical-align: middle;
          }
        }
      }
      .type {
        vertical-align: middle;
        padding-left: 1em;
        float: right;
        color: #890;
        &.java {
          color: orange;
        }
        &.kotlin {
          color: darkorchid;
        }
        &.javascript {
          color: #00ccdd;
        }
      }
    }
  }
}
@media screen and (max-width: 599px) {
  .page-opensource {
    .userinfo {
      margin: 0.17em;
      box-shadow: 0 0 2px #ccc;
    }
  }
}
@media screen and (max-width: 599px){
  .page-opensource {
    .userinfo {
      font-size: 1.8em;
      line-height: 1.2em;
    }
  }
}
@media screen and (min-width: 600px){
  .page-opensource {
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    display: flex;
    max-width: 90%;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    box-sizing: border-box;
    .userinfo {
      width: 8em;
      padding-right: 1em;
      img {
        width: 7em;
        height: 7em;
      }
    }
    .projects {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      > * {
        width: 50%;
        flex: 1;
      }
    }
  }
}
@media screen and (min-width: 1280px){
  .page-opensource {
    max-width: 80%;
    .project-item {
      border-radius: 0.3em;
    }
  }
}
</style>
