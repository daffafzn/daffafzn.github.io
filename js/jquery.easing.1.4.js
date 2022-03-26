farbbibliothek = new Array(); 
      farbbibliothek[0] = new Array("#FF0000","#FF4000","#FF8000","#FFC000","#FFFF00","#C0FF00","#80FF00","#40FF00","#00FF00","#00FF40","#00FF80","#00FFC0","#00FFFF","#00C0FF","#0080FF","#0040FF","#0000FF","#4000FF","#8000FF","#C000FF","#FF00FF","#FF00C0","#FF0080","#FF0040"); 
      farbbibliothek[1] = new Array("#FF0000","#FF4000","#FF8000","#FFC000","#FFFF00","#C0FF00","#80FF00","#40FF00","#00FF00","#00FF40","#00FF80","#00FFC0","#00FFFF","#00C0FF","#0080FF","#0040FF","#0000FF","#4000FF","#8000FF","#C000FF","#FF00FF","#FF00C0","#FF0080","#FF0040"); 

	  farbbibliothek[2] = new Array("#FF0000","#FF4000","#FF8000","#FFC000","#FFFF00","#C0FF00","#80FF00","#40FF00","#00FF00","#00FF40","#00FF80","#00FFC0","#00FFFF","#00C0FF","#0080FF","#0040FF","#0000FF","#4000FF","#8000FF","#C000FF","#FF00FF","#FF00C0","#FF0080","#FF0040");
      farbbibliothek[3] = new Array(); 
      farbbibliothek[4] = new Array("#FF0000","#FF4000","#FF8000","#FFC000","#FFFF00","#C0FF00","#80FF00","#40FF00","#00FF00","#00FF40","#00FF80","#00FFC0","#00FFFF","#00C0FF","#0080FF","#0040FF","#0000FF","#4000FF","#8000FF","#C000FF","#FF00FF","#FF00C0","#FF0080","#FF0040"); 
      farbbibliothek[5] = new Array("#FF0000","#FF4000","#FF8000","#FFC000","#FFFF00","#C0FF00","#80FF00","#40FF00","#00FF00","#00FF40","#00FF80","#00FFC0","#00FFFF","#00C0FF","#0080FF","#0040FF","#0000FF","#4000FF","#8000FF","#C000FF","#FF00FF","#FF00C0","#FF0080","#FF0040"); 
      farbbibliothek[6] = new Array("#FF0000","#FF4000","#FF8000","#FFC000","#FFFF00","#C0FF00","#80FF00","#40FF00","#00FF00","#00FF40","#00FF80","#00FFC0","#00FFFF","#00C0FF","#0080FF","#0040FF","#0000FF","#4000FF","#8000FF","#C000FF","#FF00FF","#FF00C0","#FF0080","#FF0040"); 
      farbbibliothek[7] = new Array("#FF0000","#FF4000","#FF8000","#FFC000","#FFFF00","#C0FF00","#80FF00","#40FF00","#00FF00","#00FF40","#00FF80","#00FFC0","#00FFFF","#00C0FF","#0080FF","#0040FF","#0000FF","#4000FF","#8000FF","#C000FF","#FF00FF","#FF00C0","#FF0080","#FF0040"); 
      farbbibliothek[8] = new Array("#FF0000","#FF4000","#FF8000","#FFC000","#FFFF00","#C0FF00","#80FF00","#40FF00","#00FF00","#00FF40","#00FF80","#00FFC0","#00FFFF","#00C0FF","#0080FF","#0040FF","#0000FF","#4000FF","#8000FF","#C000FF","#FF00FF","#FF00C0","#FF0080","#FF0040"); 
      farben = farbbibliothek[4]; 
      function farbschrift() 
      { 
      for(var i=0 ; i<Buchstabe.length; i++) 
      { 
      document.all["a"+i].style.color=farben[i]; 
      } 
      farbverlauf(); 
      } 
      function string2array(text) 
      { 
      Buchstabe = new Array(); 
      while(farben.length<text.length) 
      { 
      farben = farben.concat(farben); 
      } 
      k=0; 
      while(k<=text.length) 
      { 
      Buchstabe[k] = text.charAt(k); 
      k++; 
      } 
      } 
      function divserzeugen() 
      { 
      for(var i=0 ; i<Buchstabe.length; i++) 
      { 
      document.write("<font face='animated' size=5><span id='a"+i+"' class='a"+i+"'>"+Buchstabe[i] + "</span></font>"); 
      } 
      farbschrift(); 
      } 
      var a=1; 
      function farbverlauf() 
      { 
      for(var i=0 ; i<farben.length; i++) 
      { 
      farben[i-1]=farben[i]; 
      } 
      farben[farben.length-1]=farben[-1]; 
      
      setTimeout("farbschrift()",5); 
      } 
      var farbsatz=1; 
      function farbtauscher() 
      { 
      farben = farbbibliothek[farbsatz]; 
      while(farben.length<text.length) 
      { 
      farben = farben.concat(farben); 
      } 
      farbsatz=Math.floor(Math.random()*(farbbibliothek.length-0.0001)); 
      } 
      setInterval("farbtauscher()",5000); 
      text= "darkness"; 
