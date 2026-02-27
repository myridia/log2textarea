# ![email_gateway](pages/public/img/logo.png) log2textarea
Simple logger to your textarea DOM

Demo:
https://log2textarea.myridia.com


# Usage for Browser:
Add a textarea tag to your website HTML:

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
const log = new Log2textarea("foo");
log.info("hello");
log.clear("");
log.info("hello again");
}



```


# Usage for Module Browser:

```
import { Log2textarea } from 'log2textarea';
const log = new Log2textarea("foo"); 

```
