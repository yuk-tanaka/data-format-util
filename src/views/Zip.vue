<template>
  <div class="email container">
    <div class="caption">
      <h1>郵便番号補完</h1>
      <ul>
        <li>「0欠け」している郵便番号を復元</li>
        <li>ハイフンなしの場合はハイフンを補完</li>
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
          補完後郵便番号
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
  export default {
    data() {
      return {
        input: null,
      }
    },
    computed: {
      result() {
        if (!this.input) {
          return ['郵便番号を入力してください。'];
        }
        const zips = this.input.split(/\n/);

        return zips.map(zip => {
          const nonHyphen = zip.replace(/-/, '');
          const zeroFilled = ('0000000' + nonHyphen).slice(-7);
          return zeroFilled.slice(0, 3) + '-' + zeroFilled.slice(3, 7);
        });
      },
    },
  }
</script>