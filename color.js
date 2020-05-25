var Boddy = {
    setColor : function(color){
        $('body').css('color',color);
  },
      setBackgroundColor : function(color){
          $('body').css('backgroundColor',color);
  }
}

var Links = {
     setColor : function(color){
         $('a').css('color',color);
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
