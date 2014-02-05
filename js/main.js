// Takes height of the browser.

$( ".pageContainer" ).css('min-height', $(window).height());
$( ".imageTrans" ).css('min-height', $(window).height());

$( "#aboutContainer .content" ).css('min-height', ($(window).height()-120)+'px');
//_________________________________________________

//_________________________________________________

// Scrolls smoothly between navigation links.

function pageScrollSmooth(targetElement){
    var target=targetElement.find('a').attr('href');
    $('html,body').animate({scrollTop: $(target).offset().top}, 600);    
}
//_________________________________________________________________________    

// Display header after half the home page
// and hilight the header link corresponding to the current page.

// store all the page Container elements in array children.

var children=$('#wrapper').children('.pageContainer');
                    
var currentPage=0 , prevPage=0;

function displayHeader()
{
    // display the header after home page.
    
    if ( $( window ).scrollTop() > ( ($( children[0] ).height()) / 2 ) ) {
        $('#common header').removeClass('hideHeader');
        $('#common header').addClass('displayHeader');
    }
    else {
        $('#common header').removeClass('displayHeader');
        $('#common header').addClass('hideHeader');
    }
    
    // tracking the current page.
    
    for ( currentPage=0; currentPage < children.length; currentPage++ )
    {
        if ( $( window ).scrollTop() >= Math.floor(     $(children[currentPage]).offset().top )
            && $( window ).scrollTop() <= Math.floor( $(children[currentPage]).offset().top + $(children[currentPage]).height() )
        ){
            break;
        }
    }

    // if current page changes then header link color changes.
    
    if (currentPage != prevPage) {
        
        // get the corresponding Id s of the header links for the current and previous page
        
        var currentLi = $(children[currentPage]).attr('id').replace('Container','');
        var prevLi = $(children[prevPage]).attr('id').replace('Container','');
        
        $('#common #'+currentLi).addClass('currentPage');
        $('#common #'+prevLi).removeClass('currentPage');
        
        prevPage = currentPage;
    }
}
//_________________________________________________________________________

// Homepage shape drawing.

function shape(){            
    var rect1BeforeWidth = (0.0436363636363636 * $("#shape").width());
    var rect2BeforeWidth = (0.0909090909090909 * $("#shape").width());
    var rect3BeforeWidth = (0.2545454545454545 * $("#shape").width());

    $("head").append("<style>"
                     +"#rect1:before{left:-"+(rect1BeforeWidth)+"px;border-left-width:"+(rect1BeforeWidth+1)+"px;}"
                     +"#rect2:before{left:-"+(rect2BeforeWidth)+"px;border-left-width:"+(rect2BeforeWidth+1)+"px;}"
                     +"#rect3:before{left:-"+(rect3BeforeWidth+1)+"px;border-left-width:"+(rect3BeforeWidth+2)+"px;}"
                     +"</style>");
}

// Sliding homepage images.

function slideImg()
{
    setTimeout(function(){
    $("#image4").removeClass("imageOut");
    $("#image4").css("z-index","-1");
    $("#image1").removeClass("imageIn").addClass("imageOut");
    $("#image2").addClass("imageIn");
    $("#image2").css("z-index","0");
    },8000);
    
    setTimeout(function(){
    $("#image1").removeClass("imageOut");
    $("#image1").css("z-index","-1");
    $("#image2").removeClass("imageIn").addClass("imageOut");
    $("#image3").addClass("imageIn");
    $("#image3").css("z-index","0");
    },16000);
    
    setTimeout(function(){
    $("#image2").removeClass("imageOut");
    $("#image2").css("z-index","-1");
    $("#image3").removeClass("imageIn").addClass("imageOut");
    $("#image4").addClass("imageIn");
    $("#image4").css("z-index","0");
    },24000);
    
    setTimeout(function(){
    $("#image3").removeClass("imageOut");
    $("#image3").css("z-index","-1");
    $("#image4").removeClass("imageIn").addClass("imageOut");
    $("#image1").addClass("imageIn");
    $("#image1").css("z-index","0");
    },32000);
}

// Sliding the homepage shape.

function slideShape() {
    setTimeout(function(){
    $("#shape").removeClass("shapeOut");
    $("#shape").addClass("shapeIn");
    },1000);
    
    setTimeout(function(){
    $("#shape").removeClass("shapeIn");
    $("#shape").addClass("shapeOut");
    },7000);
}

// Synchronize sliding the homepage shape.

function slideShapeS() {
    slideShape();
    setInterval(slideShape,8000);
}

// Sliding the quotes.

function slideClause()
{
    setTimeout(function(){
    $("#clause4").removeClass("clauseOut");
    $("#clause1").addClass("clauseIn");
    },2000);
    
    setTimeout(function(){
    $("#clause1").removeClass("clauseIn");
    $("#clause1").addClass("clauseOut");
    },7000);
    
    setTimeout(function(){
    $("#clause1").removeClass("clauseOut");
    $("#clause2").addClass("clauseIn");
    },10000);
    
    setTimeout(function(){
    $("#clause2").removeClass("clauseIn");
    $("#clause2").addClass("clauseOut");
    },15000);
    
    setTimeout(function(){
    $("#clause2").removeClass("clauseOut");
    $("#clause3").addClass("clauseIn");    
    },18000);
    
    setTimeout(function(){
    $("#clause3").removeClass("clauseIn");
    $("#clause3").addClass("clauseOut");
    },23000);
    
    setTimeout(function(){
    $("#clause3").removeClass("clauseOut");
    $("#clause4").addClass("clauseIn");    
    },26000);
    
    setTimeout(function(){
    $("#clause4").removeClass("clauseIn");
    $("#clause4").addClass("clauseOut");
    },31000);
}

// Homepage sliding objects.

function slide() {
    slideImg();
    slideShapeS();
    slideClause();
}
//______________________________________________________

// Dsiplay activity year-Wise

var previousYear="yb2014_2013";

//var reqYear="";

function displayYear(target) {
    if ( $(target).attr('id') != previousYear)
    
        $('#contentBox #'+previousYear).removeClass('activeYearBar');
        $('#contentBox #'+previousYear + ' #' + (previousYear.replace('b','')) ).removeClass('activeYear');
        $('#activityBox #'+ previousYear).css('display','none');
        
        $('#activitiesContainer  #year #'+ $(target).attr('id')).addClass('activeYearBar');
        $('#activitiesContainer  #year #'+ $(target).attr('id') + ' #' + ($(target).attr('id').replace('b','')) ).addClass('activeYear');
        $('#activityBox #'+ $(target).attr('id')).css('display','block');
        
        previousYear = $(target).attr('id');
}

//Activity active on click.

var previousActive ="";
var previousActiveId ="";
var checkActiveActivity="";

function activityActive(targetId)
{
    $("#"+previousActive).css("border-color","#fff");
    $("#"+targetId).css("border-color","#23a0f2");
    
    $(".activityDetail").css("display","block");
    
    $("head").append("<style>"
     +"#"+previousActive+":before{display:none;}"
     +"#"+targetId+":before{display:block;}"
     +"</style>");
    
    $("#"+previousActive+"_Detail").css("display","none");
    $("#"+targetId+"_Detail").css("display","block");
    
    previousActive = targetId;
    previousActiveId = targetId;
}

// inserts the .activityDetail div after last element of the row.

function activeActivity(activityActivated)
{    
    $('div.activityImg').each(function(){

        if(activityActivated.next().length >0)
        {
            if(activityActivated.position().top!=activityActivated.next().position().top) return false;
               
            else
               { activityActivated=activityActivated.next();}
        }
        return 1;
    });
    
    $('.activityDetail').insertAfter($(activityActivated));
    
    if (checkActiveActivity!="") {
            activityDisplay();
            checkActiveActivity=previousActive;
    }
    else
    {
        activityDisplay();
        checkActiveActivity=previousActive;
    }
}
//______________________________________________________________

function activityDisplay() {
        $('.activityDetail').removeClass('activityDetailAnimHide');
        $('.activityDetail').addClass('activityDetailAnimDisplay');
}

function activityHide() {
    $('.activityDetail').removeClass('activityDetailAnimDisplay');
        $('.activityDetail').addClass('activityDetailAnimHide');

        setTimeout(function(){
            $(".activityDetail").css("display","none");
            $("#"+previousActiveId).css("border-color","#fff");
            $("head").append("<style>"
                           +"#"+previousActiveId+":before{display:none;}"
                           +"</style>");
            },290);
}

//hide the activity on clicking outside it.

function hideActivity(event)
{
    if( $(event.target).hasClass('activityImg') || $(event.target).parent().hasClass('paraActDetail') || $(event.target).parent().hasClass('activityDetail')){}
    else
    {
        if (checkActiveActivity!="") {
            activityHide();
            checkActiveActivity="";
        }
    }
}
//_________________________________________________________________________

// gallery image focus.

//var albumNo=3;

var prevPrevFocus='';
var prevFocus='';

function focusImg(target) {
    if ( prevFocus!= ( $(target).attr('id') ) ) {
        $('#'+prevFocus).removeClass('imgFocus').addClass('imgFocusRemove');
        $('#'+prevPrevFocus).removeClass('imgFocusRemove');
        target.addClass('imgFocus');
 
        prevPrevFocus=prevFocus;
        prevFocus=$(target).attr('id');
    }
}