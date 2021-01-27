// About Me

$(".collapsible-menu").accordion({
    collapsible:true,
    active:false,
    heightstyle:"content",
    icons:{"header": "ui-icon-blank", "activeHeader": "ui-icon-blank" }

})

// NAv Bar

$(".bar i").on('click', function(e){
    $(".nav-menu").toggleClass("active")
})

$(".nav-menu li").on('click', function(e){
    $(".nav-menu").removeClass("active")
})

$(window).scroll(function(){
    if ($(window).scrollTop()+$(window).height()  ==$(document).height()){
    $('.bar i').toggleClass("bottom")
    } else $(".bar i").removeClass("bottom")
})

//Contact Me

$("button").on("click",function(e){
    alert("Your message was sent")
    alert("Joking, I said it didn't work")
})

// Icons animation

var icons = $("i.skill-icons")

function randomNumber(max){
    return Math.floor(Math.random()* Math.floor(max));
}

function randomIcon(){
    let icon = icons.eq(randomNumber(8));
    icon.animate({opacity:'1'}, 1500);
    icon.animate({opacity:'0.3'}, 1500);
}

const iconic = window.setInterval(()=>{
    randomIcon();
}, 2000);

function kanyeQuote(){
$.get('https://api.kanye.rest?format=text').done(function(data){
    console.log(data)
        $("#yeezy").empty().fadeIn(1000).append('" '+ data +' "').delay(5000).fadeOut(1000)
    })
}

const yeezy = window.setInterval(()=>{
    kanyeQuote();
}, 8000);

// Video Text Typewriter animation

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 8) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 125 - Math.random() * 110;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


//Portfolio Video

$(".myvideo").on("mouseover", function(e){
    this.play();
}).on("mouseout",function(e){
    this.currentTime = 0;
    this.pause();
})