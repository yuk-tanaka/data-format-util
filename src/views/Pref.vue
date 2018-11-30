<template>
  <div class="email container">
    <div class="caption">
      <h1>都道府県番号変換</h1>
      <ul>
        <li>都道府県名を
          <a href="https://ja.wikipedia.org/wiki/%E5%85%A8%E5%9B%BD%E5%9C%B0%E6%96%B9%E5%85%AC%E5%85%B1%E5%9B%A3%E4%BD%93%E3%82%B3%E3%83%BC%E3%83%89"
             target="_blank">
            都道府県番号</a>に変換
        </li>
        <li>
          不正文字列の場合は<strong>error</strong>を表示
        </li>
      </ul>
    </div>
    <div class="row at-row">
      <div class="col-xs-24 col-sm-12 at-box-row box">
        <h2>郵便番号リストを入力</h2>
        <at-textarea
            :autofocus="true"
            maxRows="50"
            minRows="10"
            v-model="input">
        </at-textarea>
      </div>
      <div class="col-xs-24 col-sm-12 at-box-row box">
        <h2>
          変換結果
        </h2>
        <ul>
          <li v-for="(row,index) in result" :key="index">
            {{ row }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import lodash from 'lodash';
  import prefList from '../helpers/prefList';

  export default {
    data() {
      return {
        input: null,
      }
    },
    computed: {
      result() {
        if (!this.input) {
          return ['都道府県名を入力してください。'];
        }

        const prefs = this.input.split(/\n/);

        return prefs.map(pref => {
          return lodash.findKey(prefList(), row => row === pref) || 'error';
        });
      },
    },
  }
</script>