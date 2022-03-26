farbbibliothek = new Array(); 
      farbbibliothek[0] = new Array("#FF0000","#FF1100","#FF2200","#FF3300","#FF4400","#FF5500","#FF6600","#FF7700","#FF8800","#FF9900","#FFaa00","#FFbb00","#FFcc00","#FFdd00","#FFee00","#FFff00","#FFee00","#FFdd00","#FFcc00","#FFbb00","#FFaa00","#FF9900","#FF8800","#FF7700","#FF6600","#FF5500","#FF4400","#FF3300","#FF2200","#FF1100"); 
      farbbibliothek[1] = new Array("#05d8e8","#05d8e8","#05d8e8","#f8ed19","#f8ed19","#f8ed19"); 

	  farbbibliothek[2] = new Array("#8e33e8","#e01d3a","#8e33e8","#e01d3a","#8e33e8","#e01d3a","#8e33e8","#e01d3a","#8e33e8","#e01d3a","#8e33e8","#e01d3a","#8e33e8","#e01d3a","#8e33e8","#e01d3a","#8e33e8","#e01d3a","#8e33e8","#e01d3a","#8e33e8","#e01d3a","#8e33e8","#e01d3a","#8e33e8","#e01d3a","#8e33e8","#e01d3a","#8e33e8","#e01d3a","#8e33e8","#e01d3a","#8e33e8","#e01d3a","#8e33e8","#e01d3a");
      farbbibliothek[3] = new Array("#FF0000","#FF4000","#FF8000","#FFC000","#FFFF00","#C0FF00","#80FF00","#40FF00","#00FF00","#00FF40","#00FF80","#00FFC0","#00FFFF","#00C0FF","#0080FF","#0040FF","#0000FF","#4000FF","#8000FF","#C000FF","#FF00FF","#FF00C0","#FF0080","#FF0040"); 
      farbbibliothek[4] = new Array("#FF0000","#EE0000","#DD0000","#CC0000","#BB0000","#AA0000","#990000","#880000","#770000","#660000","#550000","#440000","#330000","#220000","#110000","#000000","#110000","#220000","#330000","#440000","#550000","#660000","#770000","#880000","#990000","#AA0000","#BB0000","#CC0000","#DD0000","#EE0000"); 
      farbbibliothek[5] = new Array("#05d8e8","#05d8e8","#05d8e8","#f8ed19","#f8ed19","#f8ed19"); 
      farbbibliothek[6] = new Array("#05d8e8","#05d8e8","#05d8e8","#f8ed19","#f8ed19","#f8ed19"); 
      farbbibliothek[7] = new Array("#05d8e8","#05d8e8","#05d8e8","#f8ed19","#f8ed19","#f8ed19"); 
      farbbibliothek[8] = new Array("#ffd8f4","#ffcff2","#ffc6f0","#ffbded","#ffb4eb","#ffabe8","#ffa2e6","#ff99e3","#ff90e1","#ff87de","#ff7edc","#ff75d9","#ff6cd7","#ff63d5","#ff5ad3","#ff51d1","#ff48cf","#ff3fcd","#ff36cb","#ff2dc9","#ff24c7","#ff1bc5","#ff12c3","#ff09c1","#f600b8","#ed00b1","#e400aa","#db00a3","#d2009c","#c90095","#c0008e","#b70087","#ae0080","#a50079","#9c0072","#93006b","#8a0064","#81005d","#780056","#6f004f","#660048","#5d0042","#54003b","#4b0035","#42002f","#390028","#300022","#27001b"); 
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