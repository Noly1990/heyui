<template>
  <div class="doc">
    <h2>Category</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-category</code>. </p>
  
    <h3>Basic</h3>
    <p>The basic data fields: <code>keyName</code>, <code>parentName</code>, <code>titleName</code>。</p>
    <p>Set the data mode: <code>dataMode</code>, When the data passed is a list with key and parent fields, then the <code>list</code>component will automatically calculate the tree model according to the key and parent fields (parent can be an array correspondence). If the data passed is a tree model, Then pass it <code>tree</code>。</p>
    
    <example demo="plugins/category1"></example> 

    <h3>Object Data</h3>
    <example demo="plugins/category2"></example> 
  
    <h3>Dict configuration</h3>
    
    <example demo="plugins/category3"></example> 

    <h3>Category Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>type</td>
        <td>type of data</td>
        <td>String</td>
        <td>key,object</td>
        <td>key</td>
      </tr>
      <tr>
        <td>option</td>
        <td>Configuration items, see the options below for details</td>
        <td>Object</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>multiple</td>
        <td></td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>filterable</td>
        <td></td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>config</td>
        <td>Using the global configuration parameters</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>
    
    <h3>option Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>keyName</td>
        <td>The key field name</td>
        <td>String</td>
        <td>-</td>
        <td>Global configuration <code>tree.default.keyName</code></td>
      </tr>
      <tr>
        <td>titleName</td>
        <td>The title field name</td>
        <td>String</td>
        <td>-</td>
        <td>Global configuration <code>tree.default.titleName</code></td>
      </tr>
      <tr>
        <td>parentName</td>
        <td>The parent field name</td>
        <td>String</td>
        <td>-</td>
        <td>Global configuration <code>tree.default.parentName</code></td>
      </tr>
      <tr>
        <td>childrenName</td>
        <td>The children field name</td>
        <td>String</td>
        <td>-</td>
        <td>Global configuration <code>tree.default.childrenName</code></td>
      </tr>
      <tr>
        <td>dataMode</td>
        <td>The type of data provided is whether the tile needs to be parsed or whether tree data has already been generated.</td>
        <td>String</td>
        <td>list, tree</td>
        <td>list</td>
      </tr>
      <tr>
        <td>datas</td>
        <td>Data for tree display</td>
        <td>Array, Function</td>
        <td>-</td>
        <td>[]</td>
      </tr>
      <tr>
        <td>getTotalDatas</td>
        <td>Acquiring data for tree display asynchronously, loading all at once</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>getDatas</td>
        <td>Asynchronously fetches the data for the tree display, each click to get a subset</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>
<script>