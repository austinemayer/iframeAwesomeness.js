$(document).ready(function(){$("iframe").load(function(){$("iframe").parent().append($("iframe").contents().find("body").contents());$("iframe").remove()})})
