# swagger-ui-json-tree-plugin
A plugin for Swagger UI to display JSON responses in a collapsible tree view. 

A "copy to clipboard button" is also available for the entire JSON object or for individual values

This plugin is borrowed heavily from https://github.com/dlevesque1980/swagger-ui-json-folding-plugin but uses React JSON View instead

https://www.npmjs.com/package/react-json-view

## Usage

1. Copy swagger-ui-json-tree-plugin.js and swagger-ui-json-tree-plugin.js.map from the dist folder into your Swagger project

2. Include this script in your Swagger index.html

```
<script src="./swagger-ui-json-tree-plugin.js"></script>
```

3. On the line before declaring your SwaggerUIBundle config - add this line

```
SwaggerUIStandalonePreset.unshift(jsonTreePlugin.default);
```
## Screenshot

![alt text](https://github.com/justinebateman/swagger-ui-json-tree-plugin/blob/master/doc/Example.png?raw=true)