
function JSONString(tag){

	this.space = "&nbsp;&nbsp;&nbsp;&nbsp;";
	this.line = "<br/>"
	this.output = "";
	
    if(tag == "text"){
		this.space = "				";
		this.line = "\r\n";
	}
}

JSONString.prototype = {
	getIndent : function(level){
		var indent = "";
        level = parseInt(level);
        if (level > 0) {
            while (level > 0) {
                indent += this.space;
                level--;
            }
        }
        return indent;
	},
    iterator : function (k, obj, level) {
        if (k != "" && typeof obj != "undefined") {
            if (typeof obj == "object" && obj != null) {
                if (obj instanceof Array && obj.length <= 0) {
                    this.output += this.getIndent(level) + k + " :[]" + this.line;
                } else {
                    if (obj instanceof Array) {
                        this.output += this.getIndent(level) + k + " :[" + this.line;
                    } else {
                        this.output += this.getIndent(level) + k + " :{" + this.line;
                    }

                    for (var v in obj) {
                        if (typeof obj[v] == "object") {
                            this.iterator(v, obj[v], level + 1);
                        } else {
                            this.output += this.getIndent(level + 1) + v + " : " + obj[v] + this.line;
                        }
                    }

                    if (obj instanceof Array) {
                        this.output += this.getIndent(level) + "]" + this.line;
                    } else {
                        this.output += this.getIndent(level) + "}" + this.line;
                    }
                }
            } else {
                this.output += this.getIndent(level) + k + " : " + obj + this.line;
            }
        }
    },	
    format: function (obj) {
        if (typeof obj != "undefined") {
            if (obj != "") {
                if (typeof obj == "object") {
                    if (obj instanceof Array) {
                        this.output += this.line + "[" + this.line;
                    } else {
                        this.output += this.line + "{" + this.line;
                    }
                    for (var v in obj) {
                        this.iterator(v, obj[v], 1);
                    }
                    if (obj instanceof Array) {
                        this.output += "]" + this.line;
                    } else {
                        this.output += "}" + this.line;
                    }
                } else {
                    this.output = obj;
                }
            } else {
                this.output = "obj is empty String";
            }
        } else {
            this.output = "obj is not defined ";
        }

		var out = this.output;
		this.output = "";
		
        return out;
    }	
}
