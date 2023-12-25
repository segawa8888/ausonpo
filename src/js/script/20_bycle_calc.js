document.addEventListener('DOMContentLoaded', function () {
  let back_step1 = document.getElementById('back_step1');
  if (back_step1) {
    back_step1.addEventListener('click', function (event) {
      document.getElementById('bycle_shindan_step1').style.display = 'flex';
      document.getElementById('bycle_shindan_step2').style.display = 'none';
    });
  }
  let back_step2 = document.getElementById('back_step2');
  if (back_step2) {
    back_step2.addEventListener('click', function (event) {
      document.getElementById('bycle_shindan_step2').style.display = 'flex';
      document.getElementById('bycle_shindan_step3').style.display = 'none';
    });
  }
  let next_step2 = document.getElementById('next_step2');
  if (next_step2) {
    next_step2.addEventListener('click', function (event) {
      document.getElementById('bycle_shindan_step1').style.display = 'none';
      document.getElementById('bycle_shindan_step2').style.display = 'flex';
    });
  }
  let next_step3 = document.getElementById('next_step3');
  if (next_step3) {
    next_step3.addEventListener('click', function (event) {
      document.getElementById('bycle_shindan_step2').style.display = 'none';
      document.getElementById('bycle_shindan_step3').style.display = 'flex';
    });
  }
  let next_result = document.getElementById('next_result');
  if (next_result) {
    next_result.addEventListener('click', function (event) {
      let select_step1 = document.getElementsByName('select_step1');
      let step1_len = select_step1.length;
      let step1_val = '';
      for (let i = 0; i < step1_len; i++) {
        if (select_step1.item(i).checked) {
          step1_val = select_step1.item(i).value;
        }
      }
      let select_step2 = document.getElementsByName('select_step2');
      let step2_len = select_step2.length;
      let step2_val = '';
      for (let i = 0; i < step2_len; i++) {
        if (select_step2.item(i).checked) {
          step2_val = select_step2.item(i).value;
        }
      }
      let select_step3 = document.getElementsByName('select_step3');
      let step3_len = select_step3.length;
      let step3_val = '';
      for (let i = 0; i < step3_len; i++) {
        if (select_step3.item(i).checked) {
          step3_val = select_step3.item(i).value;
        }
      }
      console.log(step1_val);
      console.log(step2_val);
      console.log(step3_val);
      /* 配列の順番 ブロンズ[本人月払,一時払,家族月払,一時払,本人・親族月払,一時払],シルバー[],ゴールド[],個賠なし[] */
      var arrBycle = [
        [340, 3790, 680, 7440, 570, 6200],
        [590, 6410, 1280, 13980, 1030, 11300],
        [1130, 12300, 2010, 21980, 1680, 18470],
        [200, 2220, 530, 5850, 420, 4610],
      ];
      var arrBycleBest = [
        [780, 8480, 2300, 25010, 1850, 20060],
        [1470, 16050, 4600, 50260, 3620, 39520],
        [2260, 24590, 6280, 68440, 4990, 54330],
        [640, 6910, 2150, 23420, 1700, 18470],
      ];
      var tmpArr;
      if (step2_val == 'Bycle') {
        tmpArr = arrBycle;
        document.getElementById('result_type1').innerHTML = step1_val;
        document.getElementById('cource_type1').innerHTML = step3_val;
        document.getElementById('result_bycle1').style.display = 'block';
        document.getElementById('result_byclebest1').style.display = 'none';
        document.getElementById('result_bycle2').style.display = 'block';
        document.getElementById('result_byclebest2').style.display = 'none';
        document.getElementById('result_bycle3').style.display = 'block';
        document.getElementById('result_byclebest3').style.display = 'none';
      } else if (step2_val == 'BycleBest') {
        tmpArr = arrBycleBest;
        document.getElementById('result_type2').innerHTML = step1_val;
        document.getElementById('cource_type2').innerHTML = step3_val;
        document.getElementById('result_bycle1').style.display = 'none';
        document.getElementById('result_byclebest1').style.display = 'block';
        document.getElementById('result_bycle2').style.display = 'none';
        document.getElementById('result_byclebest2').style.display = 'block';
        document.getElementById('result_bycle3').style.display = 'none';
        document.getElementById('result_byclebest3').style.display = 'block';
      }

      var course_num;
      if (step3_val == 'ブロンズ') {
        course_num = 0;
        document.getElementById('result_img07_off').style.display = 'block';
        document.getElementById('result_img07_on').style.display = 'none';
        document.getElementById('result_img08_off').style.display = 'block';
        document.getElementById('result_img08_on').style.display = 'none';
        document.getElementById('result_img09_off').style.display = 'block';
        document.getElementById('result_img09_on').style.display = 'none';
        document.getElementById('result_img10_off').style.display = 'block';
        document.getElementById('result_img10_on').style.display = 'none';
        document.getElementById('result_img11_off').style.display = 'block';
        document.getElementById('result_img11_on').style.display = 'none';
      } else if (step3_val == 'シルバー') {
        course_num = 1;
        document.getElementById('result_img07_off').style.display = 'none';
        document.getElementById('result_img07_on').style.display = 'block';
        document.getElementById('result_img08_off').style.display = 'none';
        document.getElementById('result_img08_on').style.display = 'block';
        document.getElementById('result_img09_off').style.display = 'none';
        document.getElementById('result_img09_on').style.display = 'block';
        document.getElementById('result_img10_off').style.display = 'block';
        document.getElementById('result_img10_on').style.display = 'none';
        document.getElementById('result_img11_off').style.display = 'block';
        document.getElementById('result_img11_on').style.display = 'none';
      } else if (step3_val == 'ゴールド') {
        course_num = 2;
        document.getElementById('result_img07_off').style.display = 'none';
        document.getElementById('result_img07_on').style.display = 'block';
        document.getElementById('result_img08_off').style.display = 'none';
        document.getElementById('result_img08_on').style.display = 'block';
        document.getElementById('result_img09_off').style.display = 'none';
        document.getElementById('result_img09_on').style.display = 'block';
        document.getElementById('result_img10_off').style.display = 'none';
        document.getElementById('result_img10_on').style.display = 'block';
        document.getElementById('result_img11_off').style.display = 'none';
        document.getElementById('result_img11_on').style.display = 'block';
      }

      var price1;
      var price2;
      if (step1_val == '本人') {
        price1 = tmpArr[course_num][0];
        price2 = tmpArr[course_num][1];
      } else if (step1_val == '家族') {
        price1 = tmpArr[course_num][2];
        price2 = tmpArr[course_num][3];
      } else if (step1_val == '本人・親族') {
        price1 = tmpArr[course_num][4];
        price2 = tmpArr[course_num][5];
      }
      var price3 = Number(price1) * 12 - Number(price2);
      console.log(price1);
      console.log(price2);
      console.log(price3);
      document.getElementById('result_price1').innerHTML = Number(price1).toLocaleString();
      document.getElementById('result_price2').innerHTML = Number(price2).toLocaleString();
      document.getElementById('result_price3').innerHTML = Number(price3).toLocaleString();
      document.getElementById('bycle_shindan_result').style.display = 'block';
      document.getElementById('bycle_shindan_result').scrollIntoView();
    });
  }
  let shindan_restart = document.getElementById('shindan_restart');
  if (shindan_restart) {
    shindan_restart.addEventListener('click', function (event) {
      document.getElementById('bycle_shindan_step3').style.display = 'none';
      document.getElementById('bycle_shindan_step1').style.display = 'flex';
      document.getElementById('bycle_shindan_result').style.display = 'none';
      document.getElementById('bycle_shindan_step1').scrollIntoView();
    });
  }
});
