## undefined
A list of tags that can be removed.

## Usage

```javascript

    $ npm install grommet-controls

    import { Tags } from 'grommet-controls';

    <Tags />
    
```

## Properties

**a11yTitle**

Custom title to be used by screen readers.

```
string
```

**children**

Function that will be called when each option is rendered.

```
function
```

**focusable**

Whether the tag list is focusable

```
boolean
```

**icon**

Icon element to remove the tag.

```
element
```

**tagProps**

Tag elements `<Box />` and `<Text />` properties

```
object
```

**onChange**

Function that will be called when the user removes a tag.

```
function
```

**onClick**

Function that will be called when the user clicks on a tag.

```
function
```

**direction**

The orientation to layout the child tags in. Defaults to `column`.

```
row
row-responsive
column
```

**placeholder**

Placeholder text to use when no value is provided.

```
string
```

**value**

List of tag items to display.

```
string
element
object
[
  string
  element
  object
]
```
  