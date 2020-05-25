var Boddy = {
    setColor : function(color){
        document.querySelector('body').style.color=color;
  },
      setBackgroundColor : function(color){
          document.querySelector('body').style.backgroundColor=color;
  }
}

var Links = {
    setColor : function(color){
        var array=document.querySelectorAll('a');
        var i=0;
        while(i<array.length){
            array[i].style.color=color;
            i=i+1;
          }
      }
  }

function nightDayHandler(self){
      var target=document.querySelector('body')
      if(self.value==='night'){
          Boddy.setBackgroundColor('black');
          Boddy.setColor('white');
          self.value='day';
          Links.setColor('powderblue');
      }else{
          Boddy.setBackgroundColor('white');
          Boddy.setColor('black');
          self.value='night';
          Links.setColor('lightsalmon');
      }
  }
