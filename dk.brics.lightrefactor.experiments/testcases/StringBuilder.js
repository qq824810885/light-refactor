function StringBuilder() {
	this.clear()
}
StringBuilder.prototype.clear = function() {
	this.array /*1*/ = []
}
StringBuilder.prototype.append = function(x) {
	this.array /*1*/.push(x)
}
StringBuilder.prototype.toString = function() {
	return this.array /*1*/.join('')
}

var sb = new StringBuilder;

sb.append("dfg")
sb.clear()
sb.toString()


function UnrelatedClass() {
	this.array /*2*/ = []
}
UnrelatedClass.prototype.append = function(x) {
	this.array /*2*/.push(x)
}
