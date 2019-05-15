<template>
  <div class="docs-library">
    <div class="lists">
      <ol>
        <li v-for="(docGroup, $index) in docGroups" :key="$index">
          <div class="group-title">
            <span class="type" :data-lang="docGroup.type">{{docGroup.type || 'JS'}}</span>
            <span class="text">{{docGroup.group || '分组'}}</span>
          </div>
          <ul class="libray-flex-wrap">
            <li v-for="doc in docGroup.docs" :key="doc.key" @click="navTo(doc)">
              <div class="title">{{doc.title || doc.label || '无标题'}}</div>
              <div class="desc">{{doc.desc || '无描述信息'}}</div>
              <i :class="'doc-icon ' + doc.icon"></i>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Docs from '@/docs/docs.js'
export default {
  data () {
    return {
      docGroups: Docs
    }
  },
  methods: {
    navTo (item) {
      if (this.$router && item.route) {
        this.$router.push(item.route)
      }
      if (item.label) {
        this.title = item.label
        window.document.title = item.label
      }
    }
  }
}
</script>

<style lang='scss'>
.docs-library {
  background-color: #fff;
  display: flex;
  height: 100%;
  flex-direction: column;
  .lists {
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    .group-title {
      color: #00ADEF;
      border-radius: 1.5em;
      width: auto;
      display: inline-block;
      user-select: none;
      font-size: 1.25em;
      
      .type {
        line-height: 3.2em;
        height: 3em;
        display: inline-block;
        width: 3em;
        text-align: center;
        background: rgb(0, 119, 255);
        color: #fff;
        border-radius: 50%;
        box-shadow: 0 0 0.5em rgba(128, 128, 128, 0.5);
        text-transform: uppercase;
        font-weight: 900;
        &[data-lang='vue'] {
          background-color: #41b783;
        }
        &[data-lang='go'] {
          background-color: #6AD7E5;
        }
        &[data-lang='js'] {
          background-color: #ff6b00;
        }
      }
      .text {
        line-height: 3em;
        padding: 0 1em;
      }
    }
    ol {
      list-style: none;
      padding: 0;
      margin: 0;
      > li{
        &:not(:first-of-type) {
          margin-top: 2em;
        }
      }
    }
  }
  .libray-flex-wrap {
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li {
      padding: 0.5em;
      box-sizing: border-box;
      height: 16em;
      width: 12em;
      display: inline-block;
      position: relative;
      box-shadow: 0 0 0.5em rgba(128, 128, 128, 0.5);
      margin: 1em 1em 0 0;
      background: #fff;
      overflow: hidden;
      user-select: none;
      cursor: pointer;
      word-break: break-all;
      border-radius: 0.2em;
      transition: transform 0.5s ease-in-out;
      &:active,
      &:hover {
        transform: scale(1.2);
        z-index: 99;
        box-shadow: 5px 5px 20px #888;
      }
      &:active {
        // transform: scale(0.95);
        background: #eee;
        outline: 1px solid #0094ff;
      }

      .title {
        text-overflow: ellipsis;
        /*white-space: nowrap;
        word-wrap: none;*/
        overflow: hidden;
        color: #555;
        font-size: 1.4em;
        padding-bottom: 0.5em;
        -webkit-line-clamp: 2 !important;
        -webkit-box-orient: vertical !important;
      }
      .desc {
        overflow: hidden;
        color: #aaa;
      }
      .doc-icon {
        position: absolute;
        right: 0.5em;
        bottom: 0.5em;
        width: 3em;
        height: 3em;
        opacity: 0.2;
      }
    }
  }
}
@media screen and (max-width: 599px) {
  .docs-library {
    flex-direction: column-reverse;
    .lists {
      .group-title {
        padding: 0 1em;
        line-height: 1;
        margin-top: 1em;
        margin-left: -1.3em;
      }
      padding: 1em 2em 2em 2em;
    }
    .libray-flex-wrap {
      flex-wrap: nowrap;
      flex-direction: column;
      padding: 0 1em;
      > li {
        box-shadow: none;
        width: 100%;
        height: auto;
      }
    }
  }
}
@media screen and (min-width: 600px) {
  .docs-library {
    .lists {
      /*
      padding: 0.2em 2em;
      border-left: 0.3em solid ;
      border-image: linear-gradient(rgb(0, 119, 255), rgb(253, 137, 228)) 100 100;
      margin: 2em;
      */
      padding: 2em 4em;
      .group-title {
        margin-left: -1em;
      }
    }
  }
}
</style>
