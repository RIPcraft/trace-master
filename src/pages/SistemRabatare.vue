<template>
  <q-page padding>
    <!-- <control-panel>
      <template slot="viewPort">
        <circle stroke-width="10"
                stroke="green"
                :cx="cx"
                :cy="cy"
                :r="r"
                style="cursor: pointer;"
        />
        <circle fill="red"
                :cx="cx"
                :cy="cy"
                :r="r"
        />
      </template>

      <template slot="controls">
        <q-input type="number" v-model="cx" />
        <q-input type="number" v-model="cy" />
        <q-input type="number" v-model="r" />
      </template>
    </control-panel> -->
  </q-page>
</template>

<script>
// import NumericRange from 'components/NumericRange.vue';

export default {
  name: 'SistemRabatare',
  components: {
    // NumericRange,
  },
  data() {
    return {
      cx: 100,
      cy: 200,
      r: 50,
    };
  },
};

// let Segmentare, Cadre, Continuu, Scala = 25, Adancime, Axa, Grosime, See, Sstm, Centru;

// function Sistem () {
//   this.X1 = new Interval($('S1Xm'), $('S1XM'));
//   this.Y1 = new Interval($('S1Ym'), $('S1YM'));
//   this.T1 = new Interval($('T1m'), $('T1M'));
//   this.X2 = new Interval($('S2Xm'), $('S2XM'));
//   this.Y2 = new Interval($('S2Ym'), $('S2YM'));
//   this.T2 = new Interval($('T2m'), $('T2M'));
//   this.Ss1 = new Point(this.X1.Crt, this.Y1.Crt, true);
//   this.sS1 = new Point(this.Y1.Crt, Adancime.valueAsNumber - this.X1.Crt, true);
//   this.Js1 = this.sS1.Per(this.Ss1.Mid(this.sS1, 1, 2), this.T1.Crt);
//   this.AngS = this.Js1.Ang(this.Ss1);
//   this.AngF = this.Js1.Ang(this.sS1);
//   this.Arc = this.AngF - this.AngS;
//   this.Ss2 = new Point(this.X2.Crt, this.Y2.Crt, true);
//   this.sS2 = new Point(this.Y2.Crt, Adancime.valueAsNumber - this.X2.Crt, true);
//   this.Js2 = this.sS2.Per(this.Ss2.Mid(this.sS2, 1, 2), this.T2.Crt);
//   this.Dis = this.Ss1.Dis(this.Ss2);
//   this.Rd1 = this.Js1.Dis(this.Ss1);
//   this.Rd2 = this.Js2.Dis(this.Ss2);
//   this.Per = this.Ss1.Per(this.Ss2, this.Dis);
//   this.Co = new Point(Adancime.valueAsNumber, 0);
//   this.D1o = this.Co.Det(this.Ss1, this.Ss2);
//   this.D2o = this.Co.Det(this.Per, this.Ss2);
//   this.Cv = new Point(0, 0);
//   this.D1v = this.Cv.Det(this.Ss1, this.Ss2);
//   this.D2v = this.Cv.Det(this.Per, this.Ss2);
//   this.Co.Lin(this.Cv,'#1133AA');
//   this.Js1.Lin(this.Ss1,'#1133AA');
//   this.Js2.Lin(this.Ss2,'#1133AA');
//   this.sS1.Lin(this.Ss1,'#113377');
//   this.sS2.Lin(this.Ss2,'#113377');
//   this.Ss1 = [this.Ss1];
//   this.Ss2 = [this.Ss2];
//   this.Co = [this.Co];
//   this.Cv = [this.Cv];
//   for (let C = Cadre.valueAsNumber, t = 1; t <= C; t++) {
//     this.Ss1.push(this.Js1.Inc(this.AngS + t * this.Arc / C, this.Rd1));
//     this.Ss2.push(this.Ss1[t].Tri(this.Js2, this.Dis, this.Rd2));
//     this.Co.push(this.Ss1[t].Eqd(this.Ss2[t], this.D1o, this.D2o));
//     this.Cv.push(this.Ss1[t].Eqd(this.Ss2[t], this.D1v, this.D2v));
//     this.Co[t].Lin(this.Cv[t]);
//     this.Js1.Lin(this.Ss1[t],'#AA3311');
//     this.Js2.Lin(this.Ss2[t],'#AA3311');
//   }
//   this.Js1.Dsc('#AA3311');
//   this.Js2.Dsc('#AA3311');
// }
// Sistem.prototype.Set = function () {
//   this.Ss1[0].Mov(new Point(this.X1.Crt, this.Y1.Crt));
//   this.sS1.Mov(new Point(this.Y1.Crt, Adancime.valueAsNumber - this.X1.Crt));
//   this.Js1.Mov(this.sS1.Per(this.Ss1[0].Mid(this.sS1, 1, 2), this.T1.Crt));
//   this.AngS = this.Js1.Ang(this.Ss1[0]);
//   this.AngF = this.Js1.Ang(this.sS1);
//   this.Arc = this.AngF - this.AngS;
//   this.Ss2[0].Mov(new Point(this.X2.Crt, this.Y2.Crt));
//   this.sS2.Mov(new Point(this.Y2.Crt, Adancime.valueAsNumber - this.X2.Crt));
//   this.Js2.Mov(this.sS2.Per(this.Ss2[0].Mid(this.sS2, 1, 2), this.T2.Crt));
//   this.Dis = this.Ss1[0].Dis(this.Ss2[0]);
//   this.Rd1 = this.Js1.Dis(this.Ss1[0]);
//   this.Rd2 = this.Js2.Dis(this.Ss2[0]);
//   this.Per = this.Ss1[0].Per(this.Ss2[0], this.Dis);
//   this.Co[0].Mov(new Point(Adancime.valueAsNumber, 0));
//   this.D1o = this.Co[0].Det(this.Ss1[0], this.Ss2[0]);
//   this.D2o = this.Co[0].Det(this.Per, this.Ss2[0]);
//   this.Cv[0].Mov(new Point(0, 0));
//   this.D1v = this.Cv[0].Det(this.Ss1[0], this.Ss2[0]);
//   this.D2v = this.Cv[0].Det(this.Per, this.Ss2[0]);
//   for (let C = Cadre.valueAsNumber, t = 1; t <= C; t++) {
//     this.Ss1[t].Mov(this.Js1.Inc(this.AngS + t * this.Arc / C, this.Rd1));
//     this.Ss2[t].Mov(this.Ss1[t].Tri(this.Js2, this.Dis, this.Rd2));
//     this.Co[t].Mov(this.Ss1[t].Eqd(this.Ss2[t], this.D1o, this.D2o));
//     this.Cv[t].Mov(this.Ss1[t].Eqd(this.Ss2[t], this.D1v, this.D2v));
//   }
//   this.Js1.Dsc('#AA3311');
//   this.Js2.Dsc('#AA3311');
// }


</script>
