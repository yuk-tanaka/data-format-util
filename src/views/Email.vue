<template>
  <div class="email container">
    <div class="caption">
      <h1>メールアドレスチェッカー</h1>
      <ul>
        <li>
          <a href="//swiftmailer.symfony.com/" target="_blank">SwiftMailer</a>
          で送信できない携帯メールアドレス
          <code> (例)sample.@docomo.ne.jp</code>を弾く
        </li>
        <li>
          全件コンバート→該当メールアドレスを<code>whereIn()</code>して削除、の使用想定
        </li>
        <li>
          表示切り替えボタンでコピペ用のPHP配列表示
        </li>
        <li>
          正規表現元ネタは<a href="//blog.zelkova.cc/2018/04/rfc-email-regexp.html" target="_blank">こちら</a>
        </li>
      </ul>
    </div>
    <div class="row at-row">
      <div class="col-xs-24 col-sm-12 at-box-row box">
        <h2>メールアドレスリストを入力</h2>
        <at-textarea
            :autofocus="true"
            maxRows="50"
            minRows="10"
            v-model="input">
        </at-textarea>
      </div>
      <div class="col-xs-24 col-sm-12 at-box-row box">
        <h2>
          RFC違反のメールアドレス
          <at-button size="small" type="primary" @click="toggle()">表示切替</at-button>
        </h2>
        <template v-if="!isViewPhpArray">
          <ul>
            <li v-for="(row,index) in result" :key="index">
              {{ row }}
            </li>
          </ul>
        </template>
        <template v-else>
          {{resultToPhpArray}}
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
  import emailRegex from '../helpers/emailRegex';

  export default {
    data() {
      return {
        input: null,
        isViewPhpArray: false,
      }
    },
    computed: {
      /**
       * 正規表現ソースは上部リンク
       * アラートも配列で渡しておく
       * @returns array
       */
      result() {
        if (!this.input) {
          return ['メールアドレスを入力してください。'];
        }

        const emails = this.input.split(/\n/);
        const regex = RegExp(emailRegex());
        const violations = emails.filter(email => !regex.test(email));

        return violations.length ? violations : ['RFC違反のメールアドレスは見つかりませんでした。'];
      },

      /**
       * php配列として出力する
       * @returns string
       */
      resultToPhpArray() {
        const str = this.result
          .filter(Boolean)
          .map(row => "'" + row + "'")
          .join(',');

        return '[' + str + ']';
      }
    },
    methods: {
      toggle() {
        this.isViewPhpArray = !this.isViewPhpArray
      },
    }
  }
</script>