/*
TERMS OF USE - EASING EQUATIONS
Open source under the BSD License.
Copyright 2001 Robert Penner All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * Neither the name of the author nor the names of contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/


Board.prototype.createBoardUI=function(){
    var e=this.boardName+"-container",t=YAHOO.util.Dom.get(e);
    if(null!=t){
        YAHOO.util.Dom.addClass(t,"ct-board-container"),this.boardDiv=null;
        var o=document.createElement("div");
        o.id=this.boardName+"-boardBorder";
        YAHOO.util.Dom.addClass(o,"ct-board-border"+this.squareColorClass);
        var i=0;
        this.showCoordinates&&(i=15);
        YAHOO.util.Dom.setStyle(o,"width",8*this.pieceSize+i+"px");
        YAHOO.util.Dom.setStyle(o,"height",8*this.pieceSize+i+"px");
        var s=document.createElement("div");
        YAHOO.util.Dom.setStyle(s,"float","left"),s.id=this.boardName+"-rankLabels",o.appendChild(s);
        var r=document.createElement("div");
        YAHOO.util.Dom.addClass(r,"ct-board");
        YAHOO.util.Dom.setStyle(r,"width",8*this.pieceSize+"px");
        YAHOO.util.Dom.setStyle(r,"height",8*this.pieceSize+"px"),r.id="ctb-"+this.boardName;
        for(var a="ct-white-square"+this.squareColorClass,n="",l=[],h=7;h>=0;h--){
            for(var c="<div>",d=0;d<8;d++){
            document.createElement("div");
            var u=this.boardName+"-s"+d+h,v=(d+1)*(h+1)%19/19*100,m=(65-(d+1)*(h+1))%19/19*100;
            c+='<div id="'+u+'" class="'+a+'" style="width:'+this.pieceSize+"px;height:"+this.pieceSize+"px;background-position:"+v+"% "+m+'%"></div>',
            l.push(u),a=a=="ct-black-square"+this.squareColorClass?"ct-white-square"+this.squareColorClass:"ct-black-square"+this.squareColorClass
            }
            a=a=="ct-black-square"+this.squareColorClass?"ct-white-square"+this.squareColorClass:"ct-black-square"+this.squareColorClass,n+=c+="</div>"
        }
        r.innerHTML=n;
        var p=document.createElement("div");
        if(p.id=this.boardName+"-fileLabels",o.appendChild(r),o.appendChild(p),t.appendChild(o),this.showToMoveIndicators){
            var g=document.createElement("div");
            g.id=this.boardName+"-moveIndicators",YAHOO.util.Dom.addClass(g,"ct-move-indicators"),g.innerHTML='<div class="ct-top-to-move-outer" id="'+this.boardName+'-top-to-move-outer"><div  class="ct-top-to-move-inner" id="'+this.boardName+'-top-to-move-inner"></div></div><div class="ct-bottom-to-move-outer"  id="'+this.boardName+'-bottom-to-move-outer"><div class="ct-bottom-to-move-inner" id="'+this.boardName+'-bottom-to-move-inner" ></div>',t.appendChild(g),YAHOO.util.Dom.setStyle(o,"float","left"),YAHOO.util.Dom.setStyle(g,"float","left"),YAHOO.util.Dom.setStyle(g,"margin-left","2px"),YAHOO.util.Dom.setStyle(g,"height",8*this.pieceSize+2+"px"),YAHOO.util.Dom.setStyle(g,"position","relative");
            var f=document.createElement("div");
            YAHOO.util.Dom.setStyle(f,"clear","both"),t.appendChild(f)
        }
        this.createBoardCoords();
        var b=!1,C=YAHOO.util.Dom.get(this.boardName+"-ct-nav-container");
        if(C?(b=!0,C.innerHTML=""):C=document.createElement("div"),C.id=this.boardName+"-ct-nav-container",!this.dontOutputNavButtons||this.r){
            var M="";
        this.dontOutputNavButtons||this.problem&&this.problem.isEndgame||(M='<span id="playStopSpan"><img class="ct-end" id="'+this.boardName+'-end" src="'+this.boardImagePath+"/images/resultset_last"+this.getVersString()+'.gif" alt="'+_js("End position")+'" title="'+_js("Iru al la fina pozicio")+'"/><img class="ct-play" id="'+this.boardName+'-play" src="'+this.boardImagePath+"/images/control_play_blue"+this.getVersString()+'.gif" alt="'+_js("Play moves")+'" title="'+_js("Ludu sekvencon de movoj")+'"/><img class="ct-stop" id="'+this.boardName+'-stop" src="'+this.boardImagePath+"/images/control_stop_blue"+this.getVersString()+'.gif" alt="'+_js("Stop playing")+'" title="'+_js("Ĉesu ludi movan sekvencon")+'"/></span>');
        var y='<div class="ct-nav-buttons" id="'+this.boardName+'-navButtons"><span id="'+this.boardName+'-nav-buttons-only">';
        if(!this.dontOutputNavButtons){
            var O="";
            (isIphone||isIpad)&&(O=' width="50px" height="34px" ',M=""),isIphone||isIpad||(y+='<img class="ct-start" id="'+this.boardName+'-start" src="'+this.boardImagePath+"/images/resultset_first"+this.getVersString()+'.gif" alt="'+_js("Start position")+'" title="'+_js("Reiru al la komenca pozicio")+'"/>'),y+='<img class="ct-back" id="'+this.boardName+'-back" '+O+' src="'+this.boardImagePath+"/images/resultset_previous"+this.getVersString()+'.gif" alt="'+_js("Previous Move")+'" title="'+_js("Reiru unu movon")+'"/><img class="ct-forward" id="'+this.boardName+'-forward" '+O+' src="'+this.boardImagePath+"/images/resultset_next"+this.getVersString()+'.gif" alt="'+_js("Next Move")+'" title="'+_js("Iru unu paŝon antaŭen")+'"/>'+M
        }
        if(this.r&&(y+='<img class="ct-forward" id="'+this.boardName+'-analyse" src="'+this.boardImagePath+"/images/anboard"+this.getVersString()+'.gif" alt="'+_js("Analyse")+'" title="'+_js("Launch analysis board to explore different lines in this position")+'"/>',this.g||(y+='<img class="ct-forward" id="'+this.boardName+'-showfen" src="'+this.boardImagePath+"/images/copy_fen"+this.getVersString()+'.gif" alt="'+_js("Copy FEN")+'" title="'+_js("Show FEN for current position")+'"/>')),this.canPasteFen&&(y+='<img class="ct-forward" id="'+this.boardName+'-pastefen" src="'+this.boardImagePath+"/images/paste_fen"+this.getVersString()+'.gif" alt="'+_js("Input FEN")+'" title="'+_js("Setup position from user supplied FEN or move list")+'"/>'),this.g2&&(y+='<img class="ct-forward" id="'+this.boardName+'-playcomp" src="'+this.boardImagePath+"/images/computer"+this.getVersString()+'.gif" alt="'+_js("Play Current Position vs Computer")+'" title="'+_js("Play current position against computer")+'"/>'),y+="</span>",y+="</div>",this.puzzle){
                var P="",A="",S="",w="";
                this.pieceSize>=29?(P=_js("Facila"),A=_js("Meza"),S=_js("Malfacila"),w=_js("Informo")):(P=_js("D1"),A=_js("D2"),S=_js("D3"),w=_js("?")),y+='<div><form action=""><button type="button" id="'+this.boardName+'-puzzleSolution" class="asolution-button">'+_js("Montri la solvon")+'</button><button id="'+this.boardName+'-easyPuzzle" type="button" class="puzzle-difficulty">'+P+'</button><button id="'+this.boardName+'-mediumPuzzle" type="button" class="puzzle-difficulty">'+A+'</button><button id="'+this.boardName+'-hardPuzzle" type="button" class="puzzle-difficulty">'+S+'</button><button id="'+this.boardName+'-puzzleHelp" type="button" class="puzzle-difficulty">'+w+'</button><img alt="" class="ct-forward" id="'+this.boardName+'-problemState"></img><span id="'+this.boardName+'-puzzleResult"></span></form></div>',y+='<div class="initially_hidden initially_invisible" id="'+this.boardName+'-moves"></div>',y+='<div class="initially_hidden initially_invisible" id="'+this.boardName+'-moves"></div>'
            }
            C.innerHTML=y
        }
        if(b||t.appendChild(C),this.problem){
                    var N=YAHOO.util.Dom.get("body");
                    N&&YAHOO.util.Dom.setStyle(N,"min-width",8*this.pieceSize+i+300+200+120+"px")
        }
    }
    else alert("Ne povas trovi tabulujon:"+e)
}                

 Puzzle.prototype.setup=function(){
    if(!document.getElementById("puzzleCss")){
        var e=document.getElementsByTagName("head")[0],t=document.createElement("link");
        t.id="puzzleCss",t.rel="stylesheet",t.type="text/css",t.href="https://chesstempo.com/css/dailypuzzle.css",t.media="all",e.appendChild(t)
    }
    this.chessapp.init(),this.board=this.chessapp.board,this.l=!1,YAHOO.util.Dom.setStyle("nav-buttons-only","display","none"),YAHOO.util.Dom.setStyle("problemState","display","none"),YAHOO.util.Event.addListener(this.board.boardName+"-puzzleSolution","click",this.showPuzzleSolution,this,!0),YAHOO.util.Event.addListener(this.board.boardName+"-easyPuzzle","click",this.showPuzzleEasy,this,!0),YAHOO.util.Event.addListener(this.board.boardName+"-mediumPuzzle","click",this.showPuzzleMedium,this,!0),YAHOO.util.Event.addListener(this.board.boardName+"-hardPuzzle","click",this.showPuzzleHard,this,!0),YAHOO.util.Event.addListener(this.board.boardName+"-puzzleHelp","click",this.showHelp,this,!0),YAHOO.util.Dom.addClass(this.board.boardName+"-easyPuzzle","selected-puzzle-difficulty");
    var o=YAHOO.util.Dom.get("ct-link");
    o&&""!=function(e){
        for(var t=/\s/,o=(e=(e=e.replace(/&nbsp;/,"")).replace(/^\s\s*/,"")).length;
        t.test(e.charAt(--o)););
        return e.slice(0,o+1)
    }
    (o.innerHTML)&&-1!=o.href.toLowerCase().indexOf("chesstempo.com")&&(this.l=!0),this.getPuzzle("easy")
}
           
Puzzle.prototype.showPuzzleSolution=function(e){
    this.board.tactics.markProblem(!1);
    var t;
    if(this.solutionDialog)t=this.solutionDialog,YAHOO.util.Dom.get(this.board.boardName+"-puzzleSolutionDiv").innerHTML=this.board.pendingMovesOutput;
    else{
        var o="300px";
        this.googleWidget&&(o="200px");
        t=new YAHOO.widget.SimpleDialog("puzzleSolution",{width:o,height:"310px",fixedcenter:!1,modal:!1,visible:!0,draggable:!0,close:!0,iframe:!0,icon:YAHOO.widget.SimpleDialog.ICON_INFO,constraintoviewport:!1,buttons:[{text:'<span style="color:black;">'+_js("Ok")+"</span>",handler:function(){
            this.hide()
        }
        ,isDefault:!0}]}),YAHOO.util.Dom.addClass(document.body,"yui-skin-sam"),t.setHeader(_js("Solvo"));
        YAHOO.util.Dom.get(this.board.boardName+"-puzzleSolutionDiv");
        t.setBody('<div id="'+this.board.boardName+'-puzzleSolutionDiv" style="text-align:justify;width:auto;height:220px;overflow:auto;color:black">'+this.board.pendingMovesOutput+"</div>")
    }
    if(this.solutionDialog=t,t.render(document.body),t.show(),t.center(),this.board.movesDisplay&&(this.board.movesDisplay.moveListName=this.board.boardName+"-puzzleSolutionDiv",this.board.movesDisplay.cachedMovesDisplay=!1,this.board.movesDisplay.allreadyCachedMovesDisplay=!1,YAHOO.util.Event.purgeElement(this.board.movesDisplay.getMovesDisplay(),!0),this.board.movesDisplay))for(var s=0;s<this.board.pendingMovesOutputCount;s++){
        var i=YAHOO.util.Dom.get(this.board.boardName+"-m"+s);
        i&&YAHOO.util.Event.addListener(i,"click",this.board.movesDisplay.gotoMove,this.board.movesDisplay,!0)
    }
}

Puzzle.prototype.showHelp=function(e){
    var t="400px",o="410px",s="320px";
    this.googleWidget&&(t="240px",o="310px",s="220px");
    var i=new YAHOO.widget.SimpleDialog("puzzleHelp",{width:t,height:o,fixedcenter:!1,modal:!1,visible:!0,draggable:!0,close:!0,iframe:!0,icon:YAHOO.widget.SimpleDialog.ICON_INFO,constraintoviewport:!1,buttons:[{text:'<span style="color:black;">'+_js("Ok")+"</span>",handler:function(){this.hide()},isDefault:!0}]});
    YAHOO.util.Dom.addClass(document.body,"yui-skin-sam"),this.googleWidget?i.setHeader(""):i.setHeader("<div>"+_js("Informo")+"</div>"),i.setBody('<div style="overflow:auto;height:'+s+';width:auto;text-align:justify"><h2>'+_js("Ĉiutaga Puzlo de Chess Tempo")+"</h2><p>"+_js("Ludu la ĝustajn movojn per transtrenado de la pecoj sur la tabulo. Se vi ludas malĝustan movon, ruĝa <b>Χ</b>-simbolo aperos sub la tabulo, kaj vi povos movi tra la solvo per la sagmarkitaj klavoj aŭ navigaj butonoj.</p><p>Por montri la liston de movoj kaj analizo de la supraj 5 movoj ĉe ĉiu punkto, premu la butonon 'Montri la solvon'.Vi povas alklaki iun ajn el la sub-varantaj movoj en la solvo por salti al tiu pozicio sur la tabulo. </p><p>Tri niveloj de taktiko estas provizitaj ĉiutage: facila, meza kaj malfacila, vi povas ŝanĝi nivelon per klako sur la taŭgaj butonoj.")+"</p><p>"+_js('Miloj da aliaj taktikaj pozicioj estas haveblaj ĉe <a href="https://chesstempo.com/chess-tactics.html">Chess Tempo</a>.')+"</p><p>"+_js('Vizitu <a href="https://chesstempo.com/widgets.html#dailyPuzzleWidget">Chess Tempo Widgets</a> paĝon por akiri instrukciojn pri instalo de ĉiutagajn puzlajn en vian propran retpaĝon.')+"</p></div>"),i.render(document.body),i.show(),i.center()
}
