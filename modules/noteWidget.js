
//Постоянное вращение картинки луны с использованием таймера
var angle = 0;
setInterval(function () {
    angle += 0;
    jQuery("#Moon_zametki").rotate(angle);
}, 50);

//для кнопки, чтобы при наведении курсора менялся цвет
document.querySelector('.button_zametki').onmousemove = function (e) {
  var x = e.pageX - e.target.offsetLeft;
  var y = e.pageY - e.target.offsetTop;
  e.target.style.setProperty('--x', x + 'px');
  e.target.style.setProperty('--y', y + 'px');
  };

//создадим массив в котором будут храниться заметки о лунном дне
const adviceModule = (() => {
    const advicesArray = ['Луна в 7 доме, а значит будет отличный день.','Сны в эти лунные сутки будут ясны и прозрачны. Сны сегодняшнего дня считаются вещими.','Этот лунный день наиболее благоприятен для разного рода важных начинаний. Можете смело продвигать свои предложения, они обязательно найдут отклик и будут приняты.',
      'В этот день лучше всего заняться разрешением накопившихся за неделю задач, составлением планов на последующие дни, образно говоря, - распутывать завязавшиеся узелки.','День хорош для начала цикла физических упражнений, лечебного голодания или диеты. Любые начинания в этот день получают дополнительную энергетическую подпитку.',
      'В этот день хорошо отсекать ненужные связи. Рекомендуется обновление, очищение мыслей, так как мысль в этот день материальна.','лунный день достаточно спокойный и благоприятный, но сегодня не стоит никуда спешить и торопиться.', 'Сегодня луна благоволит к людям творческих профессий.Успех, удача и признание будут сопутствовать им на протяжении всего дня.'];
    
    return {
      getRandomAdvice: ()=> {
        const index = Math.floor(Math.random()*advicesArray.length);
        return advicesArray[index];
      }
    }
  })();
   
  //При нажатии на кнопку "показать еще" рандомно меняется заметка о лунном дне
    document.getElementById('show_more').addEventListener('click', (e) =>{
    document.getElementById('text_zametki').innerText = adviceModule.getRandomAdvice();
  });
