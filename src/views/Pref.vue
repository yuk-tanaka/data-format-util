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
        const prefList = {
          '1': '北海道',
          '2': '青森県',
          '3': '岩手県',
          '4': '宮城県',
          '5': '秋田県',
          '6': '山形県',
          '7': '福島県',
          '8': '茨城県',
          '9': '栃木県',
          '10': '群馬県',
          '11': '埼玉県',
          '12': '千葉県',
          '13': '東京都',
          '14': '神奈川県',
          '15': '新潟県',
          '16': '富山県',
          '17': '石川県',
          '18': '福井県',
          '19': '山梨県',
          '20': '長野県',
          '21': '岐阜県',
          '22': '静岡県',
          '23': '愛知県',
          '24': '三重県',
          '25': '滋賀県',
          '26': '京都府',
          '27': '大阪府',
          '28': '兵庫県',
          '29': '奈良県',
          '30': '和歌山県',
          '31': '鳥取県',
          '32': '島根県',
          '33': '岡山県',
          '34': '広島県',
          '35': '山口県',
          '36': '徳島県',
          '37': '香川県',
          '38': '愛媛県',
          '39': '高知県',
          '40': '福岡県',
          '41': '佐賀県',
          '42': '長崎県',
          '43': '熊本県',
          '44': '大分県',
          '45': '宮崎県',
          '46': '鹿児島県',
          '47': '沖縄県',
        };

        const prefs = this.input.split(/\n/);

        return prefs.map(pref => {
          return lodash.findKey(prefList, row => row === pref) || 'error';
        });
      },
    },
  }
</script>