
window.addEventListener('load',h())

    function h(){
        setTimeout(function(){
            document.getElementById("scan").style.opacity="1"},5800);
            setTimeout(function(){
            document.getElementById("scan").style.opacity="0.9"},5900);
            setTimeout(function(){
                document.getElementById("scan").style.opacity="0.8"},6000);
                setTimeout(function(){
                    document.getElementById("scan").style.opacity="0.7"},6100);
                    setTimeout(function(){
                        document.getElementById("scan").style.opacity="0.6"},6200);
                        setTimeout(function(){
                            document.getElementById("scan").style.opacity="0.5"},6300);
                            setTimeout(function(){
                                document.getElementById("scan").style.opacity="0.4"},6400); 
                                setTimeout(function(){
                                    document.getElementById("scan").style.opacity="0.3"},6500); 
                                    setTimeout(function(){
                                        document.getElementById("scan").style.opacity="0.2"},6600);
                                        setTimeout(function(){
                                            document.getElementById("scan").style.opacity="0.1"},6700);
                                            setTimeout(function(){
                                                document.getElementById("scan").style.opacity="0";
                                                document.getElementById("scan").style.display="none";
                                            },6800);
                                            setTimeout(function(){
                                                document.getElementById("scan").style.opacity="0";
                                                document.getElementById("scan").style.display="none";
                                            },6800);
                                            setTimeout(function(){
                                              Write()
                                              
                                          },9000);
                                          setTimeout(function(){
                                            
                                            document.getElementById("next1").style.display="block"
                                            
                                            
                                        },17990);
                                        setTimeout(function() {
                                          document.getElementById("next").style.animationPlayState="paused"
                                        }, 19000);

                                         
                                            
    }
    
        var i = 0;
var txt = "Stuck with";
var speed = 100;

function Write() {
  if (i < txt.length) {
    
    document.getElementById("b1").innerHTML += txt.charAt(i);
    
    i++;
    document.getElementById("type").play();
    
   setTimeout(Write, speed);

  }
  else if(i == txt.length)   {
      Write1()
  }
    }
    
    var i1 = 0;
var txt1 = " old ";
var speed1 = 100;

function Write1() {
  if (i1 < txt1.length) {
  
    
    document.getElementById("b2").innerHTML += txt1.charAt(i1);

    document.getElementById("type").play();
    i1++;
   
   setTimeout(Write1, speed1); 
  }
  if (i1 == txt1.length) {
      Write2()
  }

    }
    var i2 = 0;
    var txt2 = "technogy?";
    var speed2 = 100;
    
    function Write2() {
      if (i2 < txt2.length) {
      
        
        document.getElementById("b3").innerHTML += txt2.charAt(i2);

        document.getElementById("type").play();
        i2++;
       
       setTimeout(Write1, speed2); 
      }
      if (i2 == txt2.length) {
          Write3()
      }
    
        } 
        var i3 = 0;
        var txt3 = "Having a";
        var speed3 = 100;
        
        function Write3() {
          if (i3 < txt3.length) {
            
            document.getElementById("b4").innerHTML += txt3.charAt(i3);

            document.getElementById("type").play();
            i3++;
            
           setTimeout(Write3, speed3);
        
          }
          else if(i3 == txt3.length)   {
              Write4()
          }
            }
            
            var i14 = 0;
        var txt14 = " hard ";
        var speed14 = 100;
        
        function Write4() {
          if (i14 < txt14.length) {
          
            
            document.getElementById("b5").innerHTML += txt14.charAt(i14);

            document.getElementById("type").play();
            i14++;
           
           setTimeout(Write4, speed14); 
          }
          if (i14 == txt14.length) {
              Write5()
          }
        
            }
            var i25 = 0;
            var txt25 = "time remembering your passwords?";
            var speed25 = 100;
            
            function Write5() {
              if (i25 < txt25.length) {
              
                
                document.getElementById("b6").innerHTML += txt25.charAt(i25);

                document.getElementById("type").play();
                i25++;
               
               setTimeout(Write5, speed25); 
              }
              if (i25 == txt25.length) {
                  shine6()
              }
            }

            g="greenyellow"
  o="orangered"
            function shine6(){
setTimeout(function(){
  
  document.getElementById("b2").style.textShadow="0px 0px 2px "+g
  document.getElementById("b5").style.textShadow="0px 0px 2px "+o
},100)
setTimeout(function(){
  document.getElementById("b2").style.textShadow="0px 0px 4px "+g
  document.getElementById("b5").style.textShadow="0px 0px 4px "+o
},200)
setTimeout(function(){
  document.getElementById("b2").style.textShadow="0px 0px 6px "+g
  document.getElementById("b5").style.textShadow="0px 0px 6px "+o
},300)
setTimeout(function(){
  document.getElementById("b2").style.textShadow="0px 0px 8px "+g
  document.getElementById("b5").style.textShadow="0px 0px 8px "+o
},400)
setTimeout(function(){
  document.getElementById("b2").style.textShadow="0px 0px 10px "+g
  document.getElementById("b5").style.textShadow="0px 0px 10px "+o
},500)
setTimeout(function(){
  document.getElementById("b2").style.textShadow="0px 0px 12px "+g
  document.getElementById("b5").style.textShadow="0px 0px 12px "+o
},600)
setTimeout(function(){
  document.getElementById("b2").style.textShadow="0px 0px 14px "+g
  document.getElementById("b5").style.textShadow="0px 0px 14px "+o
},700)
setTimeout(function(){
  document.getElementById("b2").style.textShadow="0px 0px 16px "+g
  document.getElementById("b5").style.textShadow="0px 0px 16px "+o
},800)
setTimeout(function(){
  document.getElementById("b2").style.textShadow="0px 0px 18px "+g
  document.getElementById("b5").style.textShadow="0px 0px 18px "+o
},900)
setTimeout(function(){
  document.getElementById("b2").style.textShadow="0px 0px 20px "+g
  document.getElementById("b5").style.textShadow="0px 0px 20px "+o
},1000)



            }
            var x = 0
            function click1(){
if(x==0){
              document.getElementById("next").style.marginLeft="-500"
              document.getElementById("next").style.animationDuration="15s"
               
              setTimeout(function(){                
                document.getElementById("next1").style.display="none";
                document.getElementById("next").style.animationPlayState="running"
            },800);
            move();
            
            }
            else if(x==1){
              move1()
              
            }
            else if(x==2){
              change1()
             
            }
          }
          var a = 0;
          function move(){
            
            if(a<3000){
            document.getElementById("l2").style.marginLeft= -a+"px";
            document.getElementById("l1").style.marginLeft= -a+"px";
            a=a+10;
            setTimeout(move,1);
            console.log(a)
            }
            else{
              a=0
              document.getElementById("next").display="none"
              
            document.getElementById("l2").style.marginLeft= a+"px";
            document.getElementById("l1").style.marginLeft= a+"px";
            document.getElementById("b1").innerHTML=""
            document.getElementById("b2").innerHTML=""
            document.getElementById("b3").innerHTML=""
            document.getElementById("b4").innerHTML=""
            document.getElementById("b5").innerHTML=""
            document.getElementById("b2").style.fontFamily="'Zen Dots', cursive";
            document.getElementById("b2").style.color="salmon";
            
            document.getElementById("b5").style.color="#F1C27D";
            document.getElementById("b2").style.fontSize="50px"
            document.getElementById("b5").style.fontFamily=" 'Freckle Face', cursive"
            document.getElementById("b6").innerHTML=""
            
            document.getElementById("b2").style.textShadow="0px 0px 0px "+g
  document.getElementById("b5").style.textShadow="0px 0px 0px "+o

            console.log("1");
            txt="Why use your";
            txt1=" mind ";
            txt2="?";           
            txt3="When you can use your";
            txt14=" face ";
            txt25="!";
            i=0
            i1=0
            i2=0
            i3=0
            i14=0
            i25=0
            o="#F1C27D"
            g="salmon"
            console.log("2");
            setTimeout(function(){ Write()},2000)
           
            console.log("4");
            setTimeout(function(){                
              document.getElementById("next1").style.display="block";
              
          },10700);
          setTimeout(function(){                
            
            document.getElementById("next").style.animationPlayState="paused"
        },11500);
        x=1 
      }
            }
            a = 0;
            function move1() {
              setTimeout(function(){document.getElementById("next1").style.display="none";},950)
              
                if(a<3000){
                document.getElementById("l2").style.marginLeft= -a+"px";
                document.getElementById("l1").style.marginLeft= -a+"px";
                a=a+10;
                setTimeout(move1,1);
                console.log(a)
                }
                else{
                  
                  console.log("hidden!")
                a=0
                console.log("hidden!")
                
                document.getElementById("next").style.animationPlayState="running";
                console.log("hidden!")
                document.getElementById("l2").style.marginLeft= a+"px";
                document.getElementById("l1").style.marginLeft= a+"px";
                document.getElementById("b1").innerHTML=""
                document.getElementById("b2").innerHTML=""
                document.getElementById("b3").innerHTML=""
                document.getElementById("b4").innerHTML=""
                document.getElementById("b5").innerHTML=""
                document.getElementById("b2").style.fontFamily=" 'MuseoModerno', cursive"
                
                document.getElementById("b2").style.color="#ADD8E6"
                document.getElementById("b5").style.color="#03C04A"
                document.getElementById("b2").style.fontSize="50px"
                
                document.getElementById("b5").style.fontFamily="'Nova Square', cursive"
                
                document.getElementById("b6").innerHTML=""
                
                //with the face recognition software of recognize,
              //you can keep you and your family safe and secure
                
                document.getElementById("b2").style.textShadow="0px 0px 0px "+g
      document.getElementById("b5").style.textShadow="0px 0px 0px "+o
    
                console.log("1");
                txt="With the face recognition technology of";
                txt1=" Recognize";
                txt2=", you can keep";           
                txt3=" yourself and your family ";
                txt14="safe and secure ";
                txt25="from unwanted hackers.";
                i=0
                i1=0
                i2=0
                i3=0
                i14=0
                i25=0
                o="#03C04A"
                g="#ADD8E6"
                console.log("2");
                document.getElementById("next").innerHTML="Go!"
                document.getElementById("next1").innerHTML="Go!"
                document.getElementsByClassName("material-icons").innerHTML="start"
                document.getElementById("next1").style.fontWeight="bold"
                document.getElementById("next").style.fontWeight="bold"


                setTimeout(function(){ Write()},2000)
               
                console.log("4");
                setTimeout(function(){                
                  
                  document.getElementById("next1").style.marginTop=" -65.1px"
                  
                  document.getElementById("next1").style.display="block";
                  
                  
              },14700);
              setTimeout(function(){
                document.getElementById("next").style.animationPlayState="paused"
              },16000)
                             
                
                
            
            x=2
                }
                
                }
                var aa= 0
                var bb= 0
                var cc= 0
                var dd= 0
                b=0
                c=0
              abc=-1
                
                function change1(){
                  if((b+c)<1200){
                  
                   
                   document.getElementById("ls").style.marginTop= -b+"px";
                       
                      document.getElementById("next1").style.marginTop= c+"px";
                      document.getElementById("next1").style.animationPlayState="paused";
                      
                    b=b+3.5;
                   c=c+7 

                    setTimeout(change1,10);
                  }
                  
                  else{
                
                setTimeout(function(){
                  document.getElementById("next1").style.display="none"
                      document.getElementById("next").style.display="none"
                      document.getElementById("next").style.display="none";
                      document.getElementById("next1").style.display="none";
                      document.getElementById("ls").style.display="none";
                      
                      document.getElementById("scan").style.display="none";
                 document.getElementById("transition").style.animationPlayState="running";
                  console.log("hi");
                  setTimeout(function(){
                    document.body.style.backgroundImage='url("White.jpg")'  
                  },2700)
                  setTimeout(function(){
                    document.getElementById("transition").style.animationPlayState="paused";
                    document.getElementById("transition").style.display="none";
                    document.getElementById("scr2").style.display="block"  
                  },5000)
                  setTimeout(function(){
                    document.getElementById("abstract").style.animationPlayState="running";
                    
                  },6000)
                  setTimeout(function(){
                    document.getElementById("content2").style.display="block"
                    document.getElementById("title").style.display="block"
                    document.getElementById("title").style.animationPlayState="running";
                    
                    
                  },7000)
                  setTimeout(function(){
                    
                    document.getElementById("sub_text").style.display="block"
                    document.getElementById("sub_text").style.animationPlayState="running";   
                  },7500)
                  setTimeout(function increase(){
                    
                    if((abc > 410) == false){
                      document.getElementById("title").style.marginTop= -abc+"px"
                      
                      abc=abc+5;
                      console.log(abc)
                      setTimeout(increase,5)
                      
                      
                    
                    }
                    else{
                      
                      
                      document.getElementById("content2").style.visibility="visible"
setTimeout(function option1(){
 
if(aa<1.1){
  document.getElementById("option1").style.opacity=aa;
  console.log(aa)
  aa=aa+0.01;
  setTimeout(option1,10)

}
  


},1000)
setTimeout(function option2(){
 
  if(bb<1.1){
    document.getElementById("option2").style.opacity=bb;
    console.log(bb)
    bb=bb+0.01;
    setTimeout(option2,10)
  
  }
    
  
  
  },2000)
  setTimeout(function option3(){
 
    if(cc<1.1){
      document.getElementById("option3").style.opacity=cc;
      console.log(cc)
      cc=cc+0.01;
      setTimeout(option3,10)
    
    }
      
    
    
    },3000)
    setTimeout(function option4(){
 
      if(dd<1.1){
        document.getElementById("option4").style.opacity=dd;
        console.log(dd)
        dd=dd+0.01;
        setTimeout(option4,10)
      
      }
        
      
      
      },4000)
                    }

                  },10000)
                },1000);

              }
              }
              var btn = "1"
              function Cchange(){
                if(document.getElementById("input").value==""){
                document.getElementById("pgld").style.backgroundColor="#e0e0e0"
                console.log("NO")
                btn="1"
                
              }
              else{
                document.getElementById("pgld").style.backgroundColor="cyan"
                console.log("YES")
                btn="2"
              }

            }
            function Change1(){
              if(btn=="2"){
                document.getElementById("pgld").style.backgroundColor="#0DC8BC"  
            }
            else if(btn=="1"){
              document.getElementById("pgld").style.backgroundColor="grey"
            }
          }
          function Change2(){
            if(btn=="2"){
              document.getElementById("pgld").style.backgroundColor="#0DC8BC";  
              transform();
          }
          else if(btn=="1"){
            document.getElementById("pgld").style.backgroundColor="grey"
          }
        }
        function Change3(){
          if(btn=="2"){
            document.getElementById("pgld").style.backgroundColor="cyan"  
        }
        else if(btn=="1"){
          document.getElementById("pgld").style.backgroundColor="#e0e0e0"
        }}
        function Change4(){
          if(btn=="2"){
            document.getElementById("pgld").style.backgroundColor="cyan"  
        }
        else if(btn=="1"){
          document.getElementById("pgld").style.backgroundColor="#e0e0e0"
        }}
      
 
var ml1=1

   
function transform(){
  if(ml1>0){
  document.getElementById("all").style.opacity=ml1;
  ml1=ml1-0.01;
  console.log(ml1);
  console.log(document.getElementById("all").style.opacity)
  setTimeout(transform,2)
  
  }
  else{
    console.log("done")
    document.getElementById("all").remove();
    document.getElementById("load").style.display="block"
    document.body.style.backgroundColor="#fcfefc"
    document.body.style.background="none"
    document.getElementById("load_text").style.animationPlayState="running"
    setTimeout(function(){
      window.location.assign("index2.html")
  },3000)
  }
  
}