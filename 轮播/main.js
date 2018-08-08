var allButtons = $('#buttons > span')
for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function (x) {
    var index = $(x.currentTarget).index()
    var p = index * -300
    $('#images').css({
      transform: 'translateX(' + p + 'px)'
    })

    n = index
    activeButton(allButtons.eq(n % l))
  })
}

var n = 0
var l = allButtons.length
playSlide(n % l)

function activeButton ($button) {
  $button
    .addClass('red')
    .siblings('.red').removeClass('red')
}

function playSlide (index) {
  allButtons.eq(index).trigger('click')
//   activeButton(allButtons.eq(index))
}

function setTimer () {
  return setInterval(() => {
    n += 1
    playSlide(n % l)
  }, 1000)
}

var timeID = setTimer()

$('.window').on('mouseenter', function () {
  window.clearInterval(timeID)
})

$('.window').on('mouseleave', function () {
  timeID = setTimer()
})
