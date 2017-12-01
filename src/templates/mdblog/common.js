import 'mdui/dist/css/mdui.css'
import 'mdui/dist/js/mdui'
import './styles/style.css'
import $ from 'jquery'
import Vue from 'vue'
import Header from './layouts/header.vue'

var scrollDelay

function pageScroll () {
  window.scrollBy(0, -50)
  scrollDelay = setTimeout(pageScroll, 10)
  if ($(window).scrollTop() <= 10) {
    clearTimeout(scrollDelay)
  }
}

$(window).scroll(function () {
  if ($(window).scrollTop() > 10) {
    $('#topbar').addClass('mdui-color-theme')
    $('#small-header').removeClass('mdui-shadow-0')
  } else {
    $('#topbar').removeClass('mdui-color-theme')
    $('#small-header').addClass('mdui-shadow-0')
  }
})

$(document).ready(function () {
  $('#mdblog-scroll').click(pageScroll)
})

window.header = new Vue({
  el: '#small-header',
  render: h => h(Header)
})
