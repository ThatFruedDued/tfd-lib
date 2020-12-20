(function(){
  window.d = window.document;
  d.get = d.querySelector;
  d.getAll = d.querySelectorAll;
  d.cre = d.createElement;
  d.h = d.head;
  d.b = d.body;
  window.c = console;
  c.l = c.log;
  c.e = c.error;
  c.err = c.error;
  HTMLElement.prototype.app = HTMLElement.prototype.appendChild;
  window.f = fetch;
  window.st = setTimeout;
  window.si = setInterval;
  window.P = Promise;
  window.XHR = XMLHttpRequest;
  window.WS = WebSocket;
  window.O = Object;
  O.def = O.defineProperty;

  HTMLElement.prototype.appNew = function(localName, options){
    if(typeof options === "undefined"){
      let x = d.cre(localName);
      this.app(x);
      return x;
    } else {
      let x = d.cre(localName, options);
      this.app(x);
      return x;
    }
  };
  String.prototype.toJson = function(){
    return JSON.parse(this);
  }
  String.prototype.tj = String.prototype.toJson;
  O.prototype.fromJson = function(){
    return JSON.stringify(this);
  }
  O.prototype.fj = O.prototype.fromJson;
  window.sl = function(ms){
    return new P(r => st(r, ms));
  };
  window.use = function(url, type){
    if(typeof type === "undefined" || type === "script"){
      return new P(r => {
        let scr = d.b.appNew("script");
        scr.src = url;
        scr.onload = function(){
          r();
        }
      });
    } else if(type === "style"){
      return new P(r => {
        let scr = d.h.appNew("link");
        scr.src = url;
        scr.rel = "stylesheet";
        scr.onload = function(){
          r();
        }
      });
    }
  }
  O.def(HTMLElement.prototype, "tc", {
    get: function get() {
      return this.textContent;
    },
    set: function set(x) {
      this.textContent = x;
    }
  });
  O.def(HTMLElement.prototype, "ih", {
    get: function get() {
      return this.innerHTML;
    },
    set: function set(x) {
      this.innerHTML = x;
    }
  });
  O.def(HTMLElement.prototype, "s", {
    get: function get() {
      return this.style;
    },
    set: function set(x) {
      this.style = x;
    }
  });
})();
