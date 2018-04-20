const state_debug = 1 << 2
const state_online = 1 << 3
const state_current = state_debug 


export default {
	i(tag,vals){
		if((state_current & state_debug) != 0)
			if(vals instanceof Array){
				if(tag === 'undefined')
					tag = 'log-util'
				vals.forEach(function(value,index){
					console.log(tag + " ==> " + value)
				})
			}else{
				if(tag === 'undefined')
					tag = 'log-util'
				console.log(tag + " ==> " + vals)

			}
	}
}
