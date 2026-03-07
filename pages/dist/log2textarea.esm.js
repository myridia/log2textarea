class i {
  /**
  Init 
  @alias module:Log2textarea
  @param {string}  - BOM ID
  @param {string}  - Start Message
  @param {boolean} - true or false to clean message box (default: true)
  @param {boolean} - true or false - log latest on top of the textarea  (default: false) 
  @returns {boolean} - void
  @example 
  *  var log = new Log2textarea("fooid","...start planning module");
  */
  constructor(o, e = "It Logs! Logs assigned to Textarea  id: " + o, l = !0, s = !1) {
    this.log = document.querySelector("#" + o), this.log || (this.log = document.createElement("TEXTAREA")), l && this.clear(), this.top = s, this.info(e);
  }
  /**
  @alias module:Log2textarea
  @param {string}  - string message
  @returns {bolean} - nonting
  @example 
  * var log = new Log2textarea("fooid","...start planning module");
  * log.info("get data from: http://foobar.com");
  */
  async info(o) {
    this.log && (this.top ? this.log.value + "" + o : this.log.value + "" + o, this.log.value = t, this.log.scrollTop = this.log.scrollHeight);
  }
  /**
  @alias module:Log2textarea
  @returns {bolean} - void
  @example 
  * var log = new Log2textarea("fooid","...start planning module");
  * log.clear();
  */
  async clear() {
    this.log && (this.log.value = "", this.log.scrollTop = this.log.scrollHeight);
  }
  /**
  @alias module:Log2textarea
  @param {string}  - string to remove
  @returns {bolean} - void
  @example 
  * var log = new Log2textarea("fooid","...start planning module");
  * log.remove("...sending");
  */
  async remove(o) {
    if (this.log) {
      const e = new RegExp(o + `
`, "g");
      this.log.value = this.log.value.replace(e, "");
    }
  }
}
window.Log2textarea = i;
export {
  i as Log2textarea
};
