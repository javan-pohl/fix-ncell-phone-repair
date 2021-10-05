!(function (t, e) {
  const i = 'addEventListener'
  const o = 'getElementsByClassName'
  const n = 'createElement'
  const s = 'classList'
  const d = 'appendChild'
  const l = 'dataset'
  const a = 'embed-lightbox-iframe'
  const h = 'embed-lightbox-is-loaded'
  const r = 'embed-lightbox-is-opened'
  const c = 'embed-lightbox-is-showing'
  const m = function (t, i, n) {
    const s = n || {};
    (this.trigger = t),
    (this.elemRef = i),
    (this.rate = s.rate || 500),
    (this.el = e[o](a)[0] || ''),
    (this.body = this.el ? this.el[o]('embed-lightbox-body')[0] : ''),
    (this.content = this.el ? this.el[o]('embed-lightbox-content')[0] : ''),
    (this.href = t.getAttribute('data-src') || ''),
    (this.paddingBottom = t.getAttribute('data-padding-bottom') || ''),
    (this.onOpened = s.onOpened),
    (this.onIframeLoaded = s.onIframeLoaded),
    (this.onLoaded = s.onLoaded),
    (this.onCreated = s.onCreated),
    this.init()
  };
  (m.prototype.init = function () {
    const t = this
    this.el || this.create()
    let e
    let o
    let n
    let s
    let d
    let l
    const a = ((e = function (e) {
      e.preventDefault(), t.open()
    }),
    (o = this.rate),
    function () {
      (d = this), (s = [].slice.call(arguments, 0)), (l = new Date())
      var t = function () {
        const i = new Date() - l
        i < o ? (n = setTimeout(t, o - i)) : ((n = null), e.apply(d, s))
      }
      n || (n = setTimeout(t, o))
    })
    this.trigger[i]('click', a)
  }),
  (m.prototype.create = function () {
    const t = this
    const o = e[n]('div');
    (this.el = e[n]('div')),
    (this.content = e[n]('div')),
    (this.body = e[n]('div')),
    this.el[s].add(a),
    o[s].add('embed-lightbox-backdrop'),
    this.content[s].add('embed-lightbox-content'),
    this.body[s].add('embed-lightbox-body'),
    this.el[d](o),
    this.content[d](this.body),
    (this.contentHolder = e[n]('div')),
    this.contentHolder[s].add('embed-lightbox-content-holder'),
    this.contentHolder[d](this.content),
    this.el[d](this.contentHolder),
    e.body[d](this.el),
    o[i]('click', () => {
      t.close()
    })
    const l = function () {
      t.isOpen() || (t.el[s].remove(c), (t.body.innerHTML = ''))
    }
    this.el[i]('transitionend', l, !1),
    this.el[i]('webkitTransitionEnd', l, !1),
    this.el[i]('mozTransitionEnd', l, !1),
    this.el[i]('msTransitionEnd', l, !1),
    this.callCallback(this.onCreated, this)
  }),
  (m.prototype.loadIframe = function () {
    let t
    let i
    const o = this;
    (this.iframeId = `${a}-${this.elemRef}`),
    (this.body.innerHTML = `<iframe src="${
      this.href
    }" name="${
      this.iframeId
    }" id="${
      this.iframeId
    }" onload="this.style.opacity=1;" style="opacity:0;border:none;height: 100vh !important" scrolling="no" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" height="166" frameborder="no"></iframe>`),
    (t = this.iframeId),
    (i = this.body),
    (e.getElementById(t).onload = function () {
      (this.style.opacity = 1),
      i[s].add(h),
      o.callCallback(o.onIframeLoaded, o),
      o.callCallback(o.onLoaded, o)
    })
  }),
  (m.prototype.open = function () {
    this.loadIframe(),
    this.paddingBottom
      ? (this.content.style.paddingBottom = this.paddingBottom)
      : this.content.removeAttribute('style'),
    this.el[s].add(c),
    this.el[s].add(r),
    this.callCallback(this.onOpened, this)
  }),
  (m.prototype.close = function () {
    this.el[s].remove(r), this.body[s].remove(h)
  }),
  (m.prototype.isOpen = function () {
    return this.el[s].contains(r)
  }),
  (m.prototype.callCallback = function (t, e) {
    typeof t === 'function' && t.bind(this)(e)
  }),
  (t.ReviewsIframeLightbox = m)
}(typeof window !== 'undefined' ? window : this, document))
if (!document.getElementById('EmbedSocialIFrame')) {
  const jsEmbed = document.createElement('script')
  if (document.body) {
    (jsEmbed.id = 'EmbedSocialIFrame'),
    (jsEmbed.src = 'https://embedsocial.com/cdn/iframe.js'),
    document.body.appendChild(jsEmbed)
  } else {
    (jsEmbed.id = 'EmbedSocialIFrame'),
    (jsEmbed.src = 'https://embedsocial.com/cdn/iframe.js'),
    document.getElementsByTagName('head')[0].appendChild(jsEmbed)
  }
}
if (!document.getElementById('EmbedSocialIFrameLightboxCSS')) {
  const cssEmbed = document.createElement('link');
  (cssEmbed.id = 'EmbedSocialIFrameLightboxCSS'),
  (cssEmbed.rel = 'stylesheet'),
  (cssEmbed.href = 'https://embedsocial.com/cdn/iframe-lightbox.min.css?v=2.0')
  document.getElementsByTagName('head')[0].appendChild(cssEmbed)
}
EMBEDSOCIALREVIEWS = {
  getEmbedData(reviewsRef, albumDiv) {
    const iframes = albumDiv.getElementsByTagName('iframe')
    if (iframes.length <= 0) {
      const ifrm = document.createElement('iframe')
      const iframeId = `embedIFrame_${reviewsRef}${Math.random().toString(36).substring(7)}`
      const srcIfrm = `https://embedsocial.com/api/reviews/widget/${reviewsRef}/`
      ifrm.setAttribute('src', srcIfrm)
      ifrm.setAttribute('id', iframeId)
      ifrm.setAttribute('class', 'embedsocial-reviews-iframe')
      ifrm.style.width = '100%'
      ifrm.style.height = '100%'
      ifrm.style.border = '0'
      ifrm.setAttribute('scrolling', 'no')
      albumDiv.appendChild(ifrm)
    }
    EMBEDSOCIALREVIEWS.initResizeFrame()
    EMBEDSOCIALREVIEWS.initFreeLinkClass(albumDiv)
    setTimeout(() => {
      for (i = 0; i < iframes.length; i++) {
        iframes[i].parentElement.classList.remove('embedsocial-widget-loading')
      }
    }, 2e3)
  },
  initResizeFrame() {
    if (
      document.getElementById('EmbedSocialIFrame')
      && typeof iFrameResize === 'function'
    ) {
      iFrameResize(
        {
          messageCallback(messageData) {
            if (messageData.message.action === 'remove_free_banner') {
              EMBEDSOCIALREVIEWS.removeFreeBanner(messageData.message)
            }
            if (messageData.message.action === 'create') {
              EMBEDSOCIALREVIEWS.createLightBox(messageData.message)
            }
          },
          resizedCallback(messageData) {
            messageData.iframe.parentElement.classList.remove(
              'embedsocial-widget-loading',
            )
          },
        },
        '.embedsocial-reviews-iframe',
      )
    } else {
      setTimeout(EMBEDSOCIALREVIEWS.initResizeFrame, 200)
    }
  },
  initResizeLightbox(reviewsRef, type) {
    if (
      document.getElementById('EmbedSocialIFrame')
      && typeof iFrameResize === 'function'
    ) {
      if (type !== 'slider') {
        iFrameResize(
          {
            messageCallback(messageData) {
              if (messageData.message.action === 'close') {
                EMBEDSOCIALREVIEWS.closeLightBox(messageData.message.reviewsRef)
              }
            },
            sizeHeight: false,
          },
          `#embed-lightbox-iframe-${reviewsRef}`,
        )
      } else {
        iFrameResize(
          {
            messageCallback(messageData) {
              if (messageData.message.action === 'close') {
                EMBEDSOCIALREVIEWS.closeLightBox(messageData.message.reviewsRef)
              }
            },
          },
          `#embed-lightbox-iframe-${reviewsRef}`,
        )
      }
    } else {
      setTimeout(() => {
        EMBEDSOCIALREVIEWS.initResizeLightbox(reviewsRef, type)
      }, 200)
    }
  },
  createLightBox(data) {
    const page = data.page ? data.page : 1
    const iframeSrc = data.src
      ? data.src
      : `https://embedsocial.com/api/get_lightbox_reviews/${
        data.reviewsRef
      }/${
        data.index
      }/${
        page}`
    if (!document.getElementById(`embed-lightbox-${data.reviewsRef}`)) {
      var divLightbox = document.createElement('a')
      divLightbox.setAttribute('class', 'embedsocail-iframe-lightbox-link')
      divLightbox.setAttribute('id', `embed-lightbox-${data.reviewsRef}`)
      divLightbox.setAttribute('data-src', iframeSrc)
      document.body.appendChild(divLightbox)
    } else {
      divLightbox = document.getElementById(`embed-lightbox-${data.reviewsRef}`)
      divLightbox.setAttribute('data-src', iframeSrc)
      divLightbox.innerHTML = ''
    }
    const type = data.type ? data.type : 'slider';
    [].forEach.call(
      document.getElementsByClassName('embedsocail-iframe-lightbox-link'),
      (el) => {
        el.lightbox = new ReviewsIframeLightbox(el, data.reviewsRef, {
          onLoaded(iframe) {
            EMBEDSOCIALREVIEWS.initResizeLightbox(data.reviewsRef, type)
            if (type === 'collect' || type === 'slider') {
              function lightBoxIframeResize() {
                let windowHeight = window.innerHeight || document.documentElement.clientHeight
                const el = document.getElementById(
                  `embed-lightbox-iframe-${data.reviewsRef}`,
                )
                if (windowHeight > 1800) {
                  windowHeight = 1800
                }
                if (el) {
                  el.style.height = `${parseInt(windowHeight * 0.95)}px`
                  el.style.zIndex = '1'
                  el.contentWindow.focus()
                }
              }
              lightBoxIframeResize()
              window.addEventListener('resize', lightBoxIframeResize)
            }
          },
        })
      },
    )
    if (data.type) {
      [].forEach.call(
        document.getElementsByClassName('embed-lightbox-iframe'),
        (el) => {
          el.className = `embed-lightbox-iframe embed-lightbox-iframe-${data.type}`
        },
      );
      [].forEach.call(
        document.getElementsByClassName('embed-lightbox-backdrop'),
        (el) => {
          el.className = `embed-lightbox-backdrop embed-lightbox-${data.type}`
        },
      )
    }
    EMBEDSOCIALREVIEWS.openLightBox(data.reviewsRef)
  },
  openLightBox(reviewsRef) {
    document.getElementById(`embed-lightbox-${reviewsRef}`).click()
    document
      .getElementsByClassName('embed-lightbox-body')[0]
      .addEventListener('click', (event) => {
        const targetElement = event.target || event.srcElement
        if (targetElement.classList.contains('embed-lightbox-is-loaded')) {
          EMBEDSOCIALREVIEWS.closeLightBox(reviewsRef)
        }
      })
    window.addEventListener(
      'keydown',
      (e) => {
        var e = window.event ? window.event : e
        if (document.getElementById(`embed-lightbox-iframe-${reviewsRef}`)) {
          const keys = [37, 39, 27]
          if (keys.indexOf(e.keyCode) > -1) {
            EMBEDSOCIALREVIEWS.navigationLightBox(reviewsRef, e.keyCode)
          }
        }
      },
      true,
    )
  },
  closeLightBox(reviewsRef) {
    document.getElementsByClassName('embed-lightbox-backdrop')[0].click();
    [].forEach.call(
      document.getElementsByClassName('embed-lightbox-body'),
      (el) => {
        el.className = 'embed-lightbox-body'
      },
    )
  },
  navigationLightBox(reviewsRef, code) {
    const iframe = document.getElementById(`embed-lightbox-iframe-${reviewsRef}`)
    if (iframe) {
      iframe.iFrameResizer.sendMessage({ navigationCode: code })
    }
  },
  initFreeLinkClass(albumDiv) {
    window.addEventListener('resize', () => {
      EMBEDSOCIALREVIEWS.freeLinkClass(albumDiv)
    })
  },
  freeLinkClass(albumDiv) {
    const freeLinks = albumDiv.getElementsByClassName('feed-powered-by-es')
    for (i = 0; i < freeLinks.length; i++) {
      freeLinks[i].className = albumDiv.offsetWidth < 768
        ? 'feed-powered-by-es feed-powered-by-es-center'
        : 'feed-powered-by-es'
    }
  },
  removeFreeBanner(data) {
    if (data.version !== 'free') {
      const iframe = document.getElementById(data.iframeId)
      if (iframe) {
        const freeBanners = iframe.parentElement.getElementsByClassName('feed-powered-by-es')
        for (i = 0; i < freeBanners.length; i++) {
          freeBanners[i].parentElement.removeChild(freeBanners[i])
        }
      }
    }
  },
}
if ('IntersectionObserver' in window) {
  function callVisible(e, t) {
    for (i in e) {
      e[i].isIntersecting
        && EMBEDSOCIALREVIEWS.getEmbedData(
          e[i].target.getAttribute('data-ref'),
          e[i].target,
        )
    }
  }
}
function standardLoad(e) {
  for (i = 0; i < e.length; i++) {
    const t = e[i]
    const o = t.getAttribute('data-ref')
    t.classList.add('embedsocial-widget-loading')
    if (
      t.getAttribute('data-lazyload') === 'yes'
      && 'IntersectionObserver' in window
    ) { new IntersectionObserver(callVisible, {}).observe(t) } else EMBEDSOCIALREVIEWS.getEmbedData(o, t)
  }
}
const er = document.getElementsByClassName('embedsocial-reviews')
er.length > 0
  ? standardLoad(er)
  : window.addEventListener('load', () => {
    standardLoad(document.getElementsByClassName('embedsocial-reviews'))
  })
