var container= document.createElement("div");
container.setAttribute('class','container');

var row= document.createElement("div");
row.setAttribute('class','row');

var column=document.createElement("div");
column.setAttribute('class','column');

row.append(column);
container.append(row);
document.body.append(container);