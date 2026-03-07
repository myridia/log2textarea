/**                                                                                       * Module Log2textarea
 * @module Log2textarea
 */
"use strict";

export class Log2textarea {
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

  constructor(
    _id,
    start_msg = "It Logs! Logs assigned to Textarea  id: " + _id + "",
    clear = true,
    top = false,
  ) {
    this.log = document.querySelector("#" + _id);
    if (!this.log) {
      this.log = document.createElement("TEXTAREA");
    }

    if (clear) {
      this.clear();
    }

    this.top = top;
    this.info(start_msg);
  }

  /**
@alias module:Log2textarea
@param {string}  - string message
@returns {bolean} - nonting
@example 
* var log = new Log2textarea("fooid","...start planning module");
* log.info("get data from: http://foobar.com");
*/
  async info(s) {
    if (this.log) {
      let t = this.log.value ;
      if (this.top) {
        t = s + "\n" +this.log.value ;
      } else {
        t = this.log.value + "\n" + s;
      }
      this.log.value = t;
      this.log.scrollTop = this.log.scrollHeight;
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
    if (this.log) {
      this.log.value = "";
      this.log.scrollTop = this.log.scrollHeight;
    }
  }

  /**
@alias module:Log2textarea
@param {string}  - string to remove
@returns {bolean} - void
@example 
* var log = new Log2textarea("fooid","...start planning module");
* log.remove("...sending");
*/
  async remove(s) {
    if (this.log) {
      const reg = new RegExp(s + "\n", "g");
      this.log.value = this.log.value.replace(reg, "");
    }
  }
}

window.Log2textarea = Log2textarea;
