const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const scrollDownButton = document.querySelector('scroll_down')


openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        if (event.target == button) {
            openModal(modal)
        }

    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}





  $(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('#topNubex').fadeIn();
        } else {
            $('#topNubex').fadeOut();
        }
    });
    $('#topNubex').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 700);
    });
});

//  КНОПКА ВНИЗ
$(function () {
    'use strict';

    var btnScrollDown = document.querySelector('#scroll_down');

    function scrollDown() {
        var windowCoords = document.documentElement.clientHeight;
        (function scroll() {
            if (window.pageYOffset < windowCoords) {
                window.scrollBy(0, 10);
                setTimeout(scroll, 0);
            }
            if (window.pageYOffset > windowCoords) {
                window.scrollTo(0, windowCoords);
            }
        })();
    }

    btnScrollDown.addEventListener('click', scrollDown);
});


// if(window.innerWidth < '991') {
//   let systemNum = 3;
//   $('.about-system .check__text:lt(' + systemNum + ')').addClass('check__text--active')
  
//   $('.about-system .pod1').on('click', function () {
//       event.preventDefault()
  
  
//       systemNum = systemNum + 100
//       $('.about-system .check__text:lt(' + systemNum + ')').addClass('check__text--active')
//       // $('.check__text').addClass('check__text--active');
  
//       if ($('.about-system .check__text:last').hasClass('check__text--active')) {
//           //            $('.wrap-button-more').fadeOut()
//           $('.about-system .pod1').css('visibility', 'hidden')
//       }
//   })
  
//   let opportunitiesNum = 3;
//   $('.opportunities .check__text:lt(' + opportunitiesNum + ')').addClass('check__text--active')
  
//   $('.opportunities .pod2').on('click', function () {
//       event.preventDefault()
  
  
//       opportunitiesNum = opportunitiesNum + 100
//       $('.opportunities .check__text:lt(' + opportunitiesNum + ')').addClass('check__text--active')
//       // $('.check__text').addClass('check__text--active');
  
//       if ($('.opportunities .check__text:last').hasClass('check__text--active')) {
//           //            $('.wrap-button-more').fadeOut()
//           $('.opportunities .pod2').css('visibility', 'hidden')
//       }
//   });
  
//   let advantagesNum = 3;
//   $('.advantages .check__text:lt(' + advantagesNum + ')').addClass('check__text--active')
  
//   $('.advantages .pod3').on('click', function () {
//       event.preventDefault()
  
  
//       advantagesNum = advantagesNum + 100
//       $('.advantages .check__text:lt(' + advantagesNum + ')').addClass('check__text--active')
//       // $('.check__text').addClass('check__text--active');
  
//       if ($('.advantages .check__text:last').hasClass('check__text--active')) {
//           //            $('.wrap-button-more').fadeOut()
//           $('.advantages .pod3').css('visibility', 'hidden')
//       }
//   })
// }

if(window.innerWidth < '991') {
  $(function() {
      $('.toggle-down-system').click(function() {
        $('.show-more-system').slideDown();
        $('.toggle-down-system').css('display', 'none');
      })
    });
    $(function() {
      $('.toggle-down-opportunities').click(function() {
        $('.show-more-opportunities').slideDown();
        $('.toggle-down-opportunities').css('display', 'none');
      })
    });
    $(function() {
      $('.toggle-down-advantages').click(function() {
        $('.show-more-advantages').slideDown();
        $('.toggle-down-advantages').css('display', 'none');
      })
    });
  }
