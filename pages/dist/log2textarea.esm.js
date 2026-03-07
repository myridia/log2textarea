class l {
  /**
  Init 
  @alias module:Log2textarea
  @param {string}  - BOM ID
  @param {string}  - Start Message
  @param {boolean} - true or false to clean message obx
  @returns {boolean} - void
  @example 
  *  var log = new Log2textarea("fooid","...start planning module");
  */
  constructor(t, o = "It Logs! Logs assigned to Textarea  id: " + t, e = !0) {
    this.log = document.querySelector("#" + t), this.log || (this.log = document.createElement("TEXTAREA")), e && this.clear(), this.info(o);
  }
  /**
  @alias module:Log2textarea
  @param {string}  - string message
  @returns {bolean} - nonting
  @example 
  * var log = new Log2textarea("fooid","...start planning module");
  * log.info("get data from: http://foobar.com");
  */
  async info(t) {
    if (this.log) {
      let o = this.log.value + `
` + t;
      this.log.value = o, this.log.scrollTop = this.log.scrollHeight;
    }
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
  async remove(t) {
    if (this.log) {
      const o = new RegExp(t + `
`, "g");
      this.log.value = this.log.value.replace(o, "");
    }
  }
}
window.Log2textarea = l;
export {
  l as Log2textarea
};
