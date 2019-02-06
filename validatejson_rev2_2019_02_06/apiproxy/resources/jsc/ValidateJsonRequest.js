   //store the payload as JSON
var body = request.content.asJSON;//context.proxyRequest.body.asJSON;
//validate the incoming message
tv4.addFormat({
/*    'date-time': function (body, schema) { if (typeof body === 'string' && /^\d\d\d\d(0?[1-9]|1[0-2])(0?[1-9]|[12][0-9]|3[01])T(?:[01]?\d|2[0-3])[0-5]\d$/.test(body)){  return null;}
       return "must be string of type date-times Example: YYYYMMDDTHHMM";},
    'email': function (body, schema) {if (typeof body === 'string' && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(body)){  return null;}
       return "must be string of type email Example:supprt@provider.com";},*/
	'two-fifty': function (body, schema) {if (typeof body === 'string' && /^.{2,50}$/.test(body)){  return null;}
       return "must be string between length 2 and 50";},
       
		
});

//var result = tv4.validateMultiple(body, schema);
//set the result in a variable
//context.setVariable("valid", result.valid);
//context.setVariable("result", JSON.stringify(result));


var result = tv4.validateMultiple(body, schema);
//set the result in a variable
var errors = {};
errors.error = result;
context.setVariable("valid", result.valid);
context.setVariable("result", JSON.stringify(errors));
