# log2textarea
Simple logger to your textarea DOM

Demo:
https://log2textarea.calantas.org


#Usage:
Add a textarea tag to your website html:

```
<textarea id="foo" rows="25" cols="80"></textarea>

```

Add a script import tag to your project:

```
<script src="node_modules/log2textarea/dist/log2textarea.js"></script>
```

Add the below to your code declaration:

example:

* 1 parameter: Textarea ID
* 2 parameter: init log message to show in the log
* 3 parameter: clear log after load new page, default is true

```
let log = new Log2textarea("foo");
log.info("hello");
log.clear("");
log.info("hello again");
}



```
supported formats: csv, xlsx, xls
<a name="module_Log2textarea"></a>

## Log2textarea
Module Log2textarea


* [Log2textarea](#module_Log2textarea)
    * [module.exports](#exp_module_Log2textarea--module.exports) ⏏
    * [module.exports#info(s)](#exp_module_Log2textarea--module.exports+info) ⇒ <code>bolean</code> ⏏
    * [module.exports#clear()](#exp_module_Log2textarea--module.exports+clear) ⇒ <code>bolean</code> ⏏

<a name="exp_module_Log2textarea--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="exp_module_Log2textarea--module.exports+info"></a>

### module.exports#info(s) ⇒ <code>bolean</code> ⏏
**Kind**: Exported function  
**Returns**: <code>bolean</code> - - nonting  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>string</code> | string message |

**Example**  
```js
var log = new Log2textarea("fooid","...start planning module");
log.info("get data from: http://foobar.com");
```
<a name="exp_module_Log2textarea--module.exports+clear"></a>

### module.exports#clear() ⇒ <code>bolean</code> ⏏
**Kind**: Exported function  
**Returns**: <code>bolean</code> - - void  
**Example**  
```js
var log = new Log2textarea("fooid","...start planning module");
log.clear();
```
